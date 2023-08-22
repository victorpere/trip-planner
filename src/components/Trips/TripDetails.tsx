import React, { useState, useEffect } from "react";

import useTripService from "../../hooks/useTripService";
import Trip from "../../models/Trip";
import ItemDetails from "../Items/ItemDetails";
import { ItemType } from "../../config/enums";
import { Item } from "../../models/Item";
import Overlay from "../elements/Overlay/Overlay";

type Props = {
  tripId?: string;
};

const TripDetails = (props: Props) => {
  const { getTripDetails, updateTrip, isLoading, error } = useTripService();
  const [trip, setTrip] = useState<Trip | null>();
  const [tripUpdateHistory, setTripUpdateHistory] = useState<Trip[]>([]);
  const [editable, setEditable] = useState<boolean>(false);

  const isTripUpdated = tripUpdateHistory.length > 0;

  const setTripAndEditable = (updatedTrip?: Trip, editable?: boolean) => {
    setTrip(updatedTrip);
    setEditable(editable ?? false);
  };

  const tripUpdateHandler = (updatedTrip: Item) => {
    trip && setTripUpdateHistory((prev) => [...prev, trip]);
    setTripAndEditable(updatedTrip as Trip, editable);
  };

  const undoHandler = () => {
    setTripUpdateHistory((prev) => {
      const newTripUpdateHistory = [ ...prev ];
      const previousTripVersion = newTripUpdateHistory.pop();
      previousTripVersion && setTrip(previousTripVersion);
      return newTripUpdateHistory;
    });
  };

  const saveHandler = () => {
    // api call to save trip
    editable &&
      trip &&
      updateTrip(trip, setTrip).then(() => {
        setTripUpdateHistory([]);
      });
  };

  useEffect(() => {
    console.log("TripDetails useEffect");
    if (props.tripId) {
      getTripDetails(props.tripId!, setTripAndEditable);
    }
  }, [getTripDetails, props.tripId]);

  if (!props.tripId) {
    return null;
  }

  if (!trip && isLoading) {
    return <div>LOADING TRIP DETAILS</div>;
  }

  if (error) {
    return <div>ERROR: {error}</div>;
  }

  if (trip) {
    return (
      <>
        {isLoading && (
          <Overlay>
            <div>Loading...</div>
          </Overlay>
        )}
        {editable && isTripUpdated && (
          <>
            <div className="float-right">
              <button onClick={saveHandler}>Save</button>
            </div>
            <div className="float-right">
              <button onClick={undoHandler}>Undo</button>
            </div>
          </>
        )}
        <ItemDetails
          item={{ ...trip, type: ItemType.trip }}
          parentItemType={ItemType.trip}
          editable={editable}
          onUpdate={tripUpdateHandler}
        />
      </>
    );
  }

  return <div>no such trip: {props.tripId}</div>;
};

export default TripDetails;
