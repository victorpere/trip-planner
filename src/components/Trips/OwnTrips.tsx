import { useEffect, useState } from "react";

import { useAuth } from "react-oidc-context";

import useTripApi from "../../hooks/useTripApi";
import Trip from "../../models/Trip";
import Card from "../Cards/Card";
import NewTrip from "./NewTrip";
import TripList from "./TripList";

const OwnTrips = () => {
  const { isAuthenticated } = useAuth();
  const [trips, setTrips] = useState<Trip[]>([]);
  const { isLoading, error, getOwnTrips } = useTripApi();

  useEffect(() => {
    if (isAuthenticated) {
      getOwnTrips(setTrips);
    }
  }, [isAuthenticated, getOwnTrips]);

  const createTripHandler = (trip: Trip) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  if (!isAuthenticated) {
    return <Card>Sign in to see your trips</Card>;
  }

  if (isLoading) {
    return <Card>LOADING...</Card>;
  }

  if (error) {
    return <Card>{error}</Card>;
  }

  return (
    <Card>
      <TripList trips={trips} />
      <NewTrip onCreateTrip={createTripHandler} />
    </Card>
  );
};

export default OwnTrips;
