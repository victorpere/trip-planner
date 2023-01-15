import { useEffect, useState } from "react";

import { useAuth } from "react-oidc-context";

import useTripApi from "../../hooks/useTripApi";
import { Trip } from "../../models/Trip";
import Card from "../Cards/Card";
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

  if (!isAuthenticated) {
    return <Card>Sign in to see your trips</Card>;
  }

  if (isLoading) {
    return <Card>LOADING...</Card>;
  }

  if (error) {
    return <Card>{error}</Card>;
  }

  return <TripList trips={trips} />;
};

export default OwnTrips;
