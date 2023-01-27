import React, { useState } from "react";
import { Item } from "../../models/Item";
import Trip from "../../models/Trip";
import Card from "../Cards/Card";
import ItemList from "./ItemList";

type Props = {
  item: Item;
};

const ItemTripDetails = (props: Props) => {
  const [trip] = useState<Trip>(props.item as Trip);

  return (
    <Card>
      <div>TripDetails</div>
      <div>{trip.name}</div>
      <div>
        <button>ADD ACTIVITY</button>
      </div>
      <ItemList parentItem={trip} tripId={trip.uuid} />
    </Card>
  );
};

export default ItemTripDetails;
