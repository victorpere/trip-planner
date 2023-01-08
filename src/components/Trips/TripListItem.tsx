import React from "react";
import { Link } from "react-router-dom";
import { Trip } from "../../models/Trip";
import Card from "../Cards/Card";
import styles from "./Trips.module.css";

type Props = { trip: Trip };

const TripListItem = (props: Props) => {
  return (
    <Card className={`${styles["trip-list-item"]}`}>
      <Link to={`trip/${props.trip.uuid}`}>{props.trip.name}</Link>
    </Card>
  );
};

export default TripListItem;
