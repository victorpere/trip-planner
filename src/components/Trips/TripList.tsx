import { useState } from "react";

import Trip from "../../models/Trip";
import TripListItem from "./TripListItem";

type Props = {
  trips: Trip[];
};

const TripList = (props: Props) => {
  const [trips, setTrips] = useState(props.trips);

  const tripDeletedHandler = (tripId: string) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.uuid !== tripId));
  };

  return (
    <>
      {trips.map((trip) => {
        return (
          <TripListItem
            key={trip.uuid}
            trip={trip}
            onTripDelete={tripDeletedHandler}
          />
        );
      })}
    </>
  );
};

export default TripList;
