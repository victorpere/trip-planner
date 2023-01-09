import React from "react";
import { useParams } from "react-router-dom";
import TripDetails from "../components/Trips/TripDetails";

const Trip = () => {
  const { tripId } = useParams<{ tripId: string }>();

  return (
    <>
      <TripDetails tripId={tripId} />
    </>
  );
};

export default Trip;
