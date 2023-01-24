import useTripApi from "../../hooks/useTripApi";
import Trip from "../../models/Trip";
import PhotoCardSmall from "../Cards/PhotoCardSmall/PhotoCardSmall";
import styles from "./Trips.module.css";

type Props = {
  trip: Trip;
  onTripDelete: (tripId: string) => void;
};

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
    <PhotoCardSmall
      title={props.trip.name}
      imageUrl={props.trip.imageUrl}
      linkUrl={`trip/${props.trip.uuid}`}
      className={`${styles["trip-list-item"]}`}
      onDelete={deleteButtonHandler}
    />
  );
};

export default TripListItem;
