import { useEffect, useState } from "react";

import Trip from "../../models/Trip";
import HorizontalList from "../Cards/Lists/HorizontalList";
import TripListItem from "./TripListItem";

type Props = {
  trips: Trip[];
  onDeleteTrip?: (tripId: string) => void;
};

const TripList = (props: Props) => {
  const [trips, setTrips] = useState(props.trips);

  const tripDeletedHandler = (tripId: string) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.uuid !== tripId));
    props.onDeleteTrip && props.onDeleteTrip(tripId);
  };

  useEffect(() => {
    setTrips(props.trips);
  }, [props.trips]);

  return (
    <HorizontalList>
      {trips.map((trip) => {
        return (
          <TripListItem
            key={trip.uuid}
            trip={trip}
            onTripDelete={tripDeletedHandler}
          />
        );
      })}
    </HorizontalList>
  );
};

export default TripList;
