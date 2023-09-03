import React from "react";
import { v4 as uuidv4 } from "uuid";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { itemListComponent } from "./utilities";
import { ItemType } from "../../config/enums";
import GroupAlternatives from "../../models/GroupAlternatives";

type ItemListProps = {
  editable: boolean;
  tripId?: string;
  items?: Item[];
  parentItemType: ItemType;
  onUpdate?: (items?: Item[]) => void;
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
    // TODO: add index parameter
    console.log("ItemList udpateItemHandler", updatedItem.uuid);
    if (props.editable && props.items && props.onUpdate) {
      if (updatedItem.uuid) {
        const itemIndex = props.items.findIndex(
          (item) => item.uuid === updatedItem.uuid
        );
        const updatedItems = [...props.items];
        updatedItems.splice(itemIndex, 1, updatedItem);
        props.onUpdate(updatedItems);
      }
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

  let ListComponent = itemListComponent(props.parentItemType);

  return <ListComponent>{itemList}</ListComponent>;
};

export default ItemList;
