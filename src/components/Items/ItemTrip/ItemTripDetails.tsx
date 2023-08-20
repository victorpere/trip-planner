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
import GroupAlternatives from "../../../models/GroupAlternatives";

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

  const deleteItemHandler = (deletedItemId: string) => {
    console.log("ItemTripDetails deleteItemHandler", deletedItemId);

    if (props.editable && props.onUpdate) {
      trip.items = trip.items?.filter((item) => item.uuid !== deletedItemId);
      props.onUpdate(trip);
    }
  };

  const updateItemHandler = (updatedItem: Item) => {
    console.log("ItemTripDetails updateItemHandler", updatedItem);

    if (
      props.editable &&
      props.onUpdate &&
      trip.uuid &&
      trip.items &&
      trip.items.find((item) => item.uuid && item.uuid === updatedItem.uuid)
    ) {
      trip.items = [
        ...trip.items.filter((item) => item.uuid !== updatedItem.uuid),
        updatedItem,
      ];

      props.onUpdate(trip);
    }
  };

  const createGroupHandler = (itemId: String, newItems: Item[]) => {
    console.log("ItemTripDetails createGroupHandler", itemId);
    // TODO: create new group and add old and new items to it

    if (props.editable && props.onUpdate && trip.items) {
      const oldItem = trip.items.find((i) => i.uuid === itemId);

      if (oldItem) {
        const newGroup: GroupAlternatives = {
          type: ItemType.groupAlt,
          items: [oldItem, ...newItems],
        };

        trip.items = [...trip.items.filter((i) => i.uuid !== itemId), newGroup];

        props.onUpdate(trip);
      }
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
        onDeleteItem={deleteItemHandler}
        onUpdateItem={updateItemHandler}
        onCreateGroup={createGroupHandler}
      />
    </Card>
  );
};

export default ItemTripDetails;
