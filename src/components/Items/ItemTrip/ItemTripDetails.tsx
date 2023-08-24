import React from "react";

import { Item } from "../../../models/Item";
import Trip from "../../../models/Trip";
import { Activity } from "../../../models/Activity";
import Card from "../../Cards/Card";
import NewItem from "../../Common/NewItem";
import ItemList from "../ItemList";
import { activityCreator } from "../../../models/Activity";
import { ItemType } from "../../../config/enums";
import { ItemDetailProps } from "../props.type";

const ItemTripDetails = (props: ItemDetailProps) => {
  const trip = props.item as Trip;

  const createItemHandler = (newItem: Item) => {
    console.log("ItemTripDetails createItemHandler");

    if (props.editable && props.onUpdate) {
      let newItems: Item[];
      if (trip.items) {
        newItems = [...trip.items, newItem];
      } else {
        newItems = [newItem];
      }

      trip.items = newItems;

      props.onUpdate(trip);
    }
  };

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
      {props.editable && (
        <NewItem<Activity>
          createItem={activityCreator}
          onCreateNewItem={createItemHandler}
          label="activity name"
        />
      )}
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
