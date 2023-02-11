import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import PhotoCardSmall from "../Cards/PhotoCardSmall/PhotoCardSmall";
import styles from "./Trips.module.css";
import { useState } from "react";
import Dialog from "../elements/Dialog/Dialog";
import { useTranslation } from "react-i18next";

type Props = {
  trip: Trip;
  onTripDelete: (tripId: string) => void;
};

const TripListItem = (props: Props) => {
  const { deleteTrip } = useTripService();
  const [deleting, setDeleting] = useState(false);
  const { t } = useTranslation();

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

  if (deleting) {
    return (
      <Dialog>
        <>
          <div>{t("Are you sure you want to delete this trip?")}</div>
          <div>
            <button onClick={deleteConfirmButtonHandler}>{t("Yes")}</button>
            <button
              onClick={() => {
                setDeleting(false);
              }}
            >
              {t("No")}
            </button>
          </div>
        </>
      </Dialog>
    );
  }

  return (
    <PhotoCardSmall
      title={props.trip.name}
      imageUrl={props.trip.imageUrl}
      className={`${styles["trip-list-item"]}`}
      leftContent={
        <Link to={`trip/${props.trip.uuid}`}>{props.trip.name}</Link>
      }
      rightContent={<FaTrashAlt onClick={deleteButtonHandler} />}
    />
  );
};

export default TripListItem;
