import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import PhotoCardSmall from "../Cards/PhotoCardSmall/PhotoCardSmall";
import styles from "./Trips.module.css";

type Props = {
  trip: Trip;
  onTripDelete: (tripId: string) => void;
};

const TripListItem = (props: Props) => {
  const { deleteTrip } = useTripService();
  const deleteButtonHandler = () => {
    // TODO: pop up warning about deleting

    if (props.trip.uuid) {
      deleteTrip(props.trip.uuid).then(() => {
        props.onTripDelete(props.trip.uuid!);
      });
    }
  };

  return (
    <PhotoCardSmall
      title={props.trip.name}
      imageUrl={props.trip.imageUrl}
      className={`${styles["trip-list-item"]}`}
      leftContent={<Link to={`trip/${props.trip.uuid}`}>{props.trip.name}</Link>}
      rightContent={<FaTrashAlt onClick={deleteButtonHandler} />}
    />
  );
};

export default TripListItem;
