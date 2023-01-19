import React from "react";

import useTripApi from "../../hooks/useTripApi";
import Trip, { tripCreator } from "../../models/Trip";
import NewItem from "../Common/NewItem";

type Props = {};

const NewTrip = (props: Props) => {
  const { createTrip } = useTripApi();

  const createNewTripHandler = (trip: Trip) => {
    console.log("createNewTripHandler");
    console.log(trip);
    const setTripId = (tripId?: string) => {
      console.log("tripId", tripId);
      trip.uuid = tripId;
    };
    createTrip(trip, setTripId).then(() => {
      console.log("created trip ");
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
