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
import GroupAlternatives from "../../../models/GroupAlternatives";
import useTripService from "../../../hooks/useTripService";

const ItemTripDetails = (props: ItemDetailProps) => {
  const [trip, setTrip] = useState<Trip>(props.item as Trip);
  const { createItem, deleteItem } = useTripItemService();
  const { updateTrip } = useTripService();

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
    console.log("ItemTripDetails updateItemHandler", updatedItem)
    setTrip((prev) => {
      if (
        prev.uuid &&
        prev.items &&
        prev.items.find((item) => item.uuid && item.uuid === updatedItem.uuid)
      ) {
        const updatedTrip = {
          ...prev,
          items: [
            ...prev.items.filter((item) => item.uuid !== updatedItem.uuid),
            updatedItem,
          ],
        };

        return updatedTrip;
      }
      return prev;
    })
  };

  const createGroupHandler = (itemId: String, newItems: Item[]) => {
    console.log("ItemTripDetails createGroupHandler", itemId);
    // TODO: create new group and add old and new items to it

    if (trip.items) {
      const oldItem = trip.items.find((i) => i.uuid === itemId);

      if (oldItem) {
        const newGroup: GroupAlternatives = {
          type: ItemType.groupAlt,
          items: [oldItem, ...newItems],
        };

        const updatedTrip = {
          ...trip,
          items: [...trip.items.filter((i) => i.uuid !== itemId), newGroup],
        };

        updateTrip(updatedTrip, setTrip).then(() => {
          console.log(
            "ItemTripDetails createGroupHandler",
            "trip updated",
            updatedTrip
          );
        });
      }
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
        onDeleteItem={deleteItemHandler}
        onUpdateItem={updateItemHandler}
        onCreateGroup={createGroupHandler}
      />
    </Card>
  );
};

export default ItemTripDetails;
