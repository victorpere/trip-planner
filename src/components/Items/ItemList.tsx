import React from "react";
import { v4 as uuidv4 } from "uuid";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { ItemType } from "../../config/enums";
import GroupAlternatives from "../../models/GroupAlternatives";
import { Activity, activityCreator } from "../../models/Activity";
import NewItem from "../Common/NewItem";
import GroupSequence, {
  groupSequenceCreator,
} from "../../models/GroupSequence";
import { ListProps } from "../Cards/Lists/props.type";

type ItemListProps = {
  editable: boolean;
  tripId?: string;
  items?: Item[];
  parentItemType: ItemType;
  onUpdate?: (items?: Item[]) => void;
  listComponent: (props: ListProps) => JSX.Element;
};

const ItemList = (props: ItemListProps) => {
  const deleteItemHandler = (itemIndex: number) => {
    console.log("ItemList deleteItemHandler", itemIndex);
    if (props.editable && props.items && props.onUpdate && itemIndex >= 0) {
      const updatedItems = [...props.items];
      updatedItems.splice(itemIndex, 1);
      console.log("updatedItems", updatedItems);
      props.onUpdate(updatedItems);
    }
  };

  const updateItemHandler = (updatedItem: Item, itemIndex: number) => {
    console.log("ItemList udpateItemHandler", updatedItem, itemIndex);
    if (props.editable && props.items && props.onUpdate) {
      const updatedItems = [...props.items];
      updatedItems.splice(itemIndex, 1, updatedItem);
      props.onUpdate(updatedItems);
    }
  };

  const createGroupHandler = (itemIndex: number, newItems: Item[]) => {
    console.log("ItemList createGroupHandler", itemIndex);
    if (props.editable && props.items && props.onUpdate) {
      const item = props.items[itemIndex];
      if (item) {
        const updatedItems = [...props.items];

        const newGroup: GroupAlternatives = {
          type: ItemType.groupAlt,
          items: [item, ...newItems],
        };

        console.log("newGroup", newGroup);
        updatedItems.splice(itemIndex, 1, newGroup);
        props.onUpdate(updatedItems);
      }
    }
  };

  const addItemHandler = (newItem: Item, deletedItemIndex?: number) => {
    console.log("ItemList addItemHandler", newItem);
    if (props.editable && props.onUpdate) {
      if (!props.items) {
        props.onUpdate([newItem]);
      } else {
        const updatedItems = [...props.items, newItem];

        if (deletedItemIndex !== undefined && deletedItemIndex >= 0) {
          updatedItems.splice(deletedItemIndex, 1);
        }
        props.onUpdate(updatedItems);
      }
    }
  };

  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item, index) => (
        <ItemDetails
          key={item.uuid ?? uuidv4()}
          tripId={props.tripId}
          item={item}
          index={index}
          parentItemType={props.parentItemType}
          editable={props.editable}
          onDelete={deleteItemHandler}
          onUpdate={updateItemHandler}
          onCreateGroup={createGroupHandler}
          onAddItem={addItemHandler}
        />
      ))
    : [];

  return (
    <>
      {props.editable && (
        <NewItem<GroupSequence>
          createItem={groupSequenceCreator}
          onCreateNewItem={addItemHandler}
          label="Add Section"
        />
      )}
      {props.editable && (
        <NewItem<Activity>
          createItem={activityCreator}
          onCreateNewItem={addItemHandler}
          label="Add Activity"
        />
      )}
      <props.listComponent>{itemList}</props.listComponent>
    </>
  );
};

export default ItemList;
