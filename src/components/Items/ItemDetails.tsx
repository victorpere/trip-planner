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
};

const ItemDetails = (props: Props) => {
  const ItemDetalsComponent = itemDetailsComponent(props.item.type);

  const deleteHandler = () => {
    console.log("ItemDetails deleteHandler", props.item.uuid);
    props.editable && props.onDelete && props.item.uuid && props.onDelete(props.item.uuid);
  };

  const updateHandler = (item: Item) => {
    console.log("ItemDetails updateHandler", props.item.uuid);
    props.editable && props.onUpdate && item.uuid && props.onUpdate(item);
  };

  return (
    <ItemDetalsComponent
      tripId={props.tripId}
      item={props.item}
      parentItemType={props.parentItemType}
      editable={props.editable}
      onDelete={deleteHandler}
      onUpdate={updateHandler}
    />
  );
};

export default ItemDetails;
