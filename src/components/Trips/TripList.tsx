import { Trip } from "../../models/Trip";
import TripListItem from "./TripListItem";

type Props = {
  trips: Trip[];
};

const TripList = (props: Props) => {
  return (
    <>
      {props.trips.map((trip) => {
        return <TripListItem key={trip.uuid} trip={trip} />;
      })}
    </>
  );
};

export default TripList;
