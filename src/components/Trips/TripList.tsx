import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import useTripApi from "../../hooks/useTripApi";
import { Trip } from "../../models/Trip";
import Card from "../Cards/Card";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { isAuthenticated } = useAuth();
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const { isLoading, error, getOwnTrips } = useTripApi();

  useEffect(() => {
    getOwnTrips(setMyTrips);
  }, [getOwnTrips]);

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
    <>
      {myTrips.map((trip) => {
        return <TripListItem key={trip.uuid} trip={trip} />;
      })}
    </>
  );
};

export default TripList;
