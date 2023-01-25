import React, { useState, useEffect } from "react";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";

type Props = {
  tripId?: string;
};

const TripDetails = (props: Props) => {
  const { getTripDetails, isLoading, error } = useTripService();
  const [trip, setTrip] = useState<Trip | null>();

  useEffect(() => {
    if (props.tripId) {
      getTripDetails(props.tripId!, setTrip);
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
    return <div>{trip.name}</div>;
  }

  return <div>{props.tripId}</div>;
};

export default TripDetails;
