import React from "react";

import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";
import { ItemType } from "../../config/enums";

type Props = {
  item: Item;
  parentItemType: ItemType;
  editable: boolean;
  tripId?: string;
  onDelete?: (itemId: string) => void;
  onUpdate?: (item: Item) => void;
  onCreateGroup?: (itemId: string, newItems: Item[]) => void;
  onAddItem?: (item: Item, deletedItemId?: string) => void;
};

const ItemDetails = (props: Props) => {
  const ItemDetalsComponent = itemDetailsComponent(props.item.type);

  const deleteHandler = () => {
    console.log("ItemDetails deleteHandler", props.item.uuid);
    props.onDelete && props.item.uuid && props.onDelete(props.item.uuid);
  };

  const updateHandler = (item: Item, push?: boolean) => {
    console.log("ItemDetails updateHandler", item);
    props.onUpdate && props.onUpdate(item);
  };

  const createGroupHandler = (newItems: Item[]) => {
    console.log("ItemDetails createNewGroupHandler", newItems);
    props.editable &&
      props.onCreateGroup &&
      props.item.uuid &&
      props.onCreateGroup(props.item.uuid, newItems);
  };

  const addItemAndDeleteHandler = (newItem: Item) => {
    console.log("ItemDetails addItemHandler", newItem);
    props.editable &&
      props.onAddItem &&
      props.item.uuid &&
      props.onAddItem(newItem, props.item.uuid);
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
