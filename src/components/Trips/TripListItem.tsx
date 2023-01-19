import React from "react";
import { Link } from "react-router-dom";

import useTripApi from "../../hooks/useTripApi";
import Trip from "../../models/Trip";
import Card from "../Cards/Card";
import styles from "./Trips.module.css";

type Props = {
  trip: Trip;
  onTripDelete: (tripId: string) => void;
};

// TODO: formatting

const TripListItem = (props: Props) => {
  const { deleteTrip } = useTripApi();
  const deleteButtonHandler = () => {
    // TODO: pop up warning about deleting

    if (props.trip.uuid) {
      deleteTrip(props.trip.uuid).then(() => {
        props.onTripDelete(props.trip.uuid!);
      });
    }
  };
  return (
    <Card className={`${styles["trip-list-item"]}`}>
      <Link to={`trip/${props.trip.uuid}`}>{props.trip.name}</Link>
      <button onClick={deleteButtonHandler}>DELETE</button>
    </Card>
  );
};

export default TripListItem;
