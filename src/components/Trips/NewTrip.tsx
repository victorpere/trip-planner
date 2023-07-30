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
  const { createTrip } = useTripService();
  const { getImages } = useImageService();

  const createNewTripHandler = (createdTrip: Trip) => {
    const processImages = (imageInfos: ImageInfo[]) => {
      if (imageInfos.length > 0) {
        createdTrip.imageUrl = imageInfos[0].url;
      }

      createTrip(createdTrip, props.onCreateTrip);
    };

    getImages(processImages, createdTrip.name);
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
