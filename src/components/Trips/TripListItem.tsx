import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import ImageCardSmall from "../Cards/ImageCardSmall/ImageCardSmall";
import ActionDialog from "../Common/ActionDialog";
import styles from "./Trips.module.css";

type Props = {
  trip: Trip;
  onTripDelete: (tripId: string) => void;
};

const TripListItem = (props: Props) => {
  const { deleteTrip } = useTripService();
  const [deleting, setDeleting] = useState(false);

  const deleteConfirmButtonHandler = () => {
    if (props.trip.uuid) {
      deleteTrip(props.trip.uuid).then(() => {
        props.onTripDelete(props.trip.uuid!);
      });
    }
  };

  const deleteButtonHandler = () => {
    setDeleting(true);
  };

  const deleteDialog = (
    <ActionDialog
      text={"Are you sure you want to delete this trip?"}
      buttons={[
        { label: "Yes", action: deleteConfirmButtonHandler },
        { label: "No", action: () => setDeleting(false) },
      ]}
    />
  );

  return (
    <>
      {deleting && deleteDialog}
      <ImageCardSmall
        title={props.trip.name}
        linkUrl={`trip/${props.trip.uuid}`}
        imageUrl={props.trip.imageUrl}
        className={`${styles["trip-list-item"]}`}
        leftContent={
          <Link to={`trip/${props.trip.uuid}`}>{props.trip.name}</Link>
        }
        rightContent={<FaTrashAlt onClick={deleteButtonHandler} />}
      />
    </>
  );
};

export default TripListItem;
