import React, { useState } from "react";

import { useTripItemService } from "../../hooks/useTripItemService";
import { Item } from "../../models/Item";
import Trip from "../../models/Trip";
import { Activity } from "../../models/Activity";
import Card from "../Cards/Card";
import NewItem from "../Common/NewItem";
import ItemList from "./ItemList";
import { activityCreator } from "../../models/Activity";
import { ItemType } from "../../config/enums";
import { ItemDetailProps } from "./props.type";

const ItemTripDetails = (props: ItemDetailProps) => {
  const [trip, setTrip] = useState<Trip>(props.item as Trip);
  const { createItem } = useTripItemService();

  const createItemHandler = (newItem: Item) => {
    const processItem = (itemId?: string) => {
      if (itemId) {
        newItem.uuid = itemId;

        setTrip((prev) => {
          let newItems: Item[];
          if (trip.items) {
            newItems = [...trip.items, newItem];
          } else {
            newItems = [newItem];
          }

          return { ...prev, items: newItems };
        });
      }
    };

    if (trip.uuid) {
      createItem(trip.uuid, "trip", trip.uuid, "items", newItem, processItem);
    }
  };

  return (
    <Card>
      <div>TripDetails</div>
      <div>{trip.name}</div>
      <NewItem<Activity>
        createItem={activityCreator}
        onCreateNewItem={createItemHandler}
        label="activity name"
      />
      <ItemList parentItemType={ItemType.trip} items={trip.items} />
    </Card>
  );
};

export default ItemTripDetails;
