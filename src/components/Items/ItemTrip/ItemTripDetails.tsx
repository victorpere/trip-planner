import React, { useEffect, useState } from "react";

import { useTripItemService } from "../../../hooks/useTripItemService";
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
  const [trip, setTrip] = useState<Trip>(props.item as Trip);
  const { createItem, deleteItem } = useTripItemService();

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

  const deleteItemHandler = (deletedItemId: string) => {
    if (trip.uuid) {
      deleteItem(trip.uuid, "items", deletedItemId).then(() => {
        setTrip((prev) => {
          return {
            ...prev,
            items: prev.items?.filter((item) => item.uuid !== deletedItemId),
          };
        });
      });
    }
  };

  const updateItemHandler = (updatedItem: Item) => {
    if (trip.uuid) {
      setTrip((prev) => {
        if (
          prev.items &&
          prev.items.find((item) => item.uuid && item.uuid === updatedItem.uuid)
        ) {
          return {
            ...prev,
            items: [
              ...prev.items.filter((item) => item.uuid !== updatedItem.uuid),
              updatedItem,
            ],
          };
        }

        return prev;
      });
    }
  };

  useEffect(() => {
    console.log("ItemTripDetails useEffect");
    console.log(trip);
  }, [trip]);

  return (
    <Card>
      <div>TripDetails</div>
      <div>{trip.name}</div>
      <NewItem<Activity>
        createItem={activityCreator}
        onCreateNewItem={createItemHandler}
        label="activity name"
      />
      <ItemList
        tripId={trip.uuid}
        parentItemType={ItemType.trip}
        items={trip.items}
        editable={props.editable}
        onDeleteItem={deleteItemHandler}
        onUpdateItem={updateItemHandler}
      />
    </Card>
  );
};

export default ItemTripDetails;
