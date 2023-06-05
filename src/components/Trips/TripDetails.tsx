import React, { useState, useEffect } from "react";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import ItemDetails from "../Items/ItemDetails";
import { ItemType } from "../../config/enums";

type Props = {
  tripId?: string;
};

const TripDetails = (props: Props) => {
  const { getTripDetails, isLoading, error } = useTripService();
  const [trip, setTrip] = useState<Trip | null>();
  const [editable, setEditable] = useState<boolean>(false);

  const setTripAndEditable = (trip?: Trip, editable?: boolean) => {
    setTrip(trip);
    setEditable(editable ?? false);
  };

  useEffect(() => {
    if (props.tripId) {
      getTripDetails(props.tripId!, setTripAndEditable);
    }
  }, [getTripDetails, props.tripId]);

  if (!props.tripId) {
    return null;
  }

  if (isLoading) {
    return <div>LOADING TRIP DETAILS</div>;
  }

  if (error) {
    return <div>ERROR: {error}</div>;
  }

  if (trip) {
    return (
      <div>
        <ItemDetails
          item={{ ...trip, type: "trip" }}
          parentItemType={ItemType.trip}
          editable={editable}
        />
      </div>
    );
  }

  return <div>no such trip: {props.tripId}</div>;
};

export default TripDetails;
