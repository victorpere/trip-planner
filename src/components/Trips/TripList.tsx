import Trip from "../../models/Trip";
import HorizontalList from "../Cards/Lists/HorizontalList";
import TripListItem from "./TripListItem";

type Props = {
  trips: Trip[];
  editable: boolean;
  onDeleteTrip?: (tripId: string) => void;
};

const TripList = (props: Props) => {
  const tripDeletedHandler = (tripId: string) => {
    props.editable && props.onDeleteTrip && props.onDeleteTrip(tripId);
  };

  return (
    <HorizontalList>
      {props.trips.map((trip) => {
        return (
          <TripListItem
            key={trip.uuid}
            trip={trip}
            editable={props.editable}
            onTripDelete={tripDeletedHandler}
          />
        );
      })}
    </HorizontalList>
  );
};

export default TripList;
