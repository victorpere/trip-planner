import React from "react";

import useTripApi from "../../hooks/useTripApi";
import Trip, { tripCreator } from "../../models/Trip";
import NewItem from "../Common/NewItem";

type Props = {
  onCreateTrip: (trip: Trip) => void;
};

const NewTrip = (props: Props) => {
  const { createTrip } = useTripApi();

  const createNewTripHandler = (trip: Trip) => {
    const setTripId = (tripId?: string) => {
      trip.uuid = tripId;
    };
    createTrip(trip, setTripId).then(() => {
      props.onCreateTrip(trip);
    });
  };

  return (
    <NewItem<Trip>
      createItem={tripCreator}
      onCreateNewItem={createNewTripHandler}
    />
  );
};

export default NewTrip;
