import React from "react";

import { Item } from "../../../models/Item";
import Trip from "../../../models/Trip";
import Card from "../../Cards/Card";
import ItemList from "../ItemList";
import { ItemType } from "../../../config/enums";
import { ItemDetailProps } from "../props.type";

const ItemTripDetails = (props: ItemDetailProps) => {
  const trip = props.item as Trip;

  const updateItemListHandler = (items?: Item[]) => {
    console.log("ItemTripDetails updateItemListHanlder", items);
    if (props.editable && props.onUpdate) {
      const updatedTrip = { ...trip, items: items };
      console.log("updatedTrip", updatedTrip);
      props.onUpdate(updatedTrip);
    }
  };

  return (
    <Card>
      <div>TripDetails</div>
      <div>{trip.name}</div>
      <ItemList
        tripId={trip.uuid}
        parentItemType={ItemType.trip}
        items={trip.items}
        editable={props.editable}
        onUpdate={updateItemListHandler}
      />
    </Card>
  );
};

export default ItemTripDetails;
