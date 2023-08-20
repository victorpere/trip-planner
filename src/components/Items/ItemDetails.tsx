import React from "react";

import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";
import { ItemType } from "../../config/enums";
import { useTripItemService } from "../../hooks/useTripItemService";

type Props = {
  item: Item;
  parentItemType: ItemType;
  editable: boolean;
  tripId?: string;
  onDelete?: (itemId: string) => void;
  onUpdate?: (item: Item) => void;
  onCreateGroup?: (itemId: string, newItems: Item[]) => void;
};

const ItemDetails = (props: Props) => {
  const { updateItem, deleteItem } = useTripItemService();
  const ItemDetalsComponent = itemDetailsComponent(props.item.type);

  const deleteHandler = () => {
    console.log("ItemDetails deleteHandler", props.item.uuid);

    if (props.editable && props.item.uuid && props.tripId) {
      deleteItem(props.tripId, "items", props.item.uuid).then(() => {
        props.onDelete && props.item.uuid && props.onDelete(props.item.uuid);
      });
    }
  };

  const updateHandler = (item: Item, push?: boolean) => {
    console.log("ItemDetails updateHandler", props.item.uuid);

    if (props.editable && props.item.uuid && props.tripId && item.uuid) {
      if (push) {
        updateItem(props.tripId, "items", item.uuid, item).then(() => {
          props.onUpdate && props.onUpdate(item);
        });
      } else {
        props.onUpdate && props.onUpdate(item);
      }
    }
  };

  const createGroupHandler = (newItems: Item[]) => {
    console.log("ItemDetails createNewGroupHandler", newItems);
    props.editable &&
      props.onCreateGroup &&
      props.item.uuid &&
      props.onCreateGroup(props.item.uuid, newItems);
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
    />
  );
};

export default ItemDetails;
