import React from "react";
import { useImageService } from "../../hooks/useImageService";

import useTripApi from "../../hooks/useTripApi";
import Trip, { tripCreator } from "../../models/Trip";
import { ImageInfo } from "../../services/interfaces/image-service.interface";
import NewItem from "../Common/NewItem";

type Props = {
  onCreateTrip: (trip: Trip) => void;
  onUpdateTrip: (trip: Trip) => void;
};

// TODO: localized strings

const NewTrip = (props: Props) => {
  const { createTrip, updateTrip } = useTripApi();
  const { getImages } = useImageService();

  const createNewTripHandler = (trip: Trip) => {
    const setTripId = (tripId?: string) => {
      trip.uuid = tripId;
    };

    const processImages = (imageInfos: ImageInfo[]) => {
      if (imageInfos.length > 0) {
        trip.imageUrl = imageInfos[0].url;
        updateTrip(trip).then(() => {
          props.onUpdateTrip(trip);
        });
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
