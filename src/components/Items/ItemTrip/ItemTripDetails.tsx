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
import { useTripItemService } from "../../../hooks/useTripItemService";

const ItemTripDetails = (props: ItemDetailProps) => {
  const { createItem } = useTripItemService();
  const trip = props.item as Trip;

  const createItemHandler = (newItem: Item) => {
    console.log("ItemTripDetails createItemHandler", newItem);

    if (props.editable && props.onUpdate && trip.uuid) {
      const setNewItemId = (newItemId?: string) => {
        newItem.uuid = newItemId;
      }

      createItem(trip.uuid, "trip", trip.uuid, "items", newItem, setNewItemId).then(() => {
        let updatedItems: Item[];
        if (trip.items) {
          updatedItems = [...trip.items, newItem];
        } else {
          updatedItems = [newItem];
        }
  
        const updatedTrip = { ...trip, items: updatedItems};
        props.onUpdate && props.onUpdate(updatedTrip);
      })  
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
