import { useEffect, useState } from "react";

import { useAuth } from "react-oidc-context";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import Card from "../Cards/Card";
import NewTrip from "./NewTrip";
import TripList from "./TripList";

const OwnTrips = () => {
  const { isAuthenticated } = useAuth();
  const [trips, setTrips] = useState<Trip[]>([]);
  const { isLoading, error, getOwnTrips } = useTripService();

  useEffect(() => {
    if (isAuthenticated) {
      getOwnTrips(setTrips);
    }
  }, [isAuthenticated, getOwnTrips]);

  const createTripHandler = (trip: Trip) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  const deleteTripHandler = (tripId: string) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.uuid !== tripId));
  };

  const updateTripHandler = (trip: Trip) => {
    setTrips((prevTrips) => {
      const tripIndex = prevTrips.map((trip) => trip.uuid).indexOf(trip.uuid);
      const updatedTrips = [...prevTrips];
      updatedTrips[tripIndex] = { ...trip };
      return updatedTrips;
    });
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
      <TripList trips={trips} onDeleteTrip={deleteTripHandler} />
      <NewTrip
        onCreateTrip={createTripHandler}
        onUpdateTrip={updateTripHandler}
      />
    </Card>
  );
};

export default OwnTrips;
