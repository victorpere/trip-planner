import React from "react";

import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";
import { ItemType } from "../../config/enums";

type Props = {
  item: Item;
  index: number;
  parentItemType: ItemType;
  editable: boolean;
  tripId?: string;
  onDelete?: (itemIndex: number) => void;
  onUpdate?: (item: Item, itemIndex: number) => void;
  onCreateGroup?: (itemIndex: number, newItems: Item[]) => void;
  onAddItem?: (item: Item, deletedItemIndex?: number) => void;
};

const ItemDetails = (props: Props) => {
  const ItemDetalsComponent = itemDetailsComponent(props.item.type);

  const deleteHandler = () => {
    console.log("ItemDetails deleteHandler", props.item.uuid);
    props.onDelete && props.onDelete(props.index);
  };

  const updateHandler = (updatedItem: Item, push?: boolean) => {
    console.log("ItemDetails updateHandler", updatedItem);
    props.onUpdate && props.onUpdate(updatedItem, props.index);
  };

  const createGroupHandler = (newItems: Item[]) => {
    console.log("ItemDetails createNewGroupHandler", newItems);
    props.editable &&
      props.onCreateGroup &&
      props.onCreateGroup(props.index, newItems);
  };

  const addItemAndDeleteHandler = (newItem: Item) => {
    console.log("ItemDetails addItemHandler", newItem);
    props.editable &&
      props.onAddItem &&
      props.onAddItem(newItem, props.index);
  };

  return (
    <ItemDetalsComponent
      tripId={props.tripId}
      item={props.item}
      parentItemType={props.parentItemType}
      editable={props.editable}
      onDelete={deleteHandler}
      onUpdate={updateHandler}
      onCreateGroup={createGroupHandler}
      onAddItemAndDelete={addItemAndDeleteHandler}
    />
  );
};

export default ItemDetails;
