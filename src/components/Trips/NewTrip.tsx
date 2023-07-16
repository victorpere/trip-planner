import React from "react";

import useTripService from "../../hooks/useTripService";
import useImageService from "../../hooks/useImageService";
import Trip, { tripCreator } from "../../models/Trip";
import { ImageInfo } from "../../services/interfaces/image-service.interface";
import NewItem from "../Common/NewItem";

type Props = {
  onCreateTrip: (trip: Trip) => void;
  onUpdateTrip: (trip: Trip) => void;
};

// TODO: localized strings

const NewTrip = (props: Props) => {
  const { createTrip, updateTrip } = useTripService();
  const { getImages } = useImageService();

  const createNewTripHandler = (trip: Trip) => {
    const setTripId = (tripId?: string) => {
      trip.uuid = tripId;
    };

    const processImages = (imageInfos: ImageInfo[]) => {
      if (imageInfos.length > 0) {
        trip.imageUrl = imageInfos[0].url;
        updateTrip(trip, props.onUpdateTrip);
      }
    };

    createTrip(trip, setTripId).then(() => {
      props.onCreateTrip(trip);
      getImages(processImages, trip.name);
    });
  };

  return (
    <NewItem<Trip>
      createItem={tripCreator}
      onCreateNewItem={createNewTripHandler}
      label="Where do you want to go?"
    />
  );
};

export default NewTrip;
