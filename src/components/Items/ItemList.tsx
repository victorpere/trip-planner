import React from "react";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { itemListComponent } from "./utilities";
import { ItemType } from "../../config/enums";

type ItemListProps = {
  editable: boolean;
  tripId?: string;
  items?: Item[];
  parentItemType: ItemType;
  onDeleteItem?: (itemId: string) => void;
  onUpdateItem?: (item: Item) => void;
  onCreateGroup?: (itemId: string, newItems: Item[]) => void;
};

const ItemList = (props: ItemListProps) => {
  const deleteItemHandler = (itemId: string) => {
    console.log("ItemList deleteItemHandler", itemId);
    props.editable && props.onDeleteItem && props.onDeleteItem(itemId);
  };

  const updateItemHandler = (item: Item) => {
    console.log("ItemList udpateItemHandler", item.uuid);
    props.editable && props.onUpdateItem && props.onUpdateItem(item);
  };

  const createGroupHandler = (itemId: string, newItems: Item[]) => {
    console.log("ItemList createGroupHandler", itemId);
    props.editable && props.onCreateGroup && props.onCreateGroup(itemId, newItems);
  };

  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item) => (
        <ItemDetails
          key={item.uuid}
          tripId={props.tripId}
          item={item}
          parentItemType={props.parentItemType}
          editable={props.editable}
          onDelete={deleteItemHandler}
          onUpdate={updateItemHandler}
          onCreateGroup={createGroupHandler}
        />
      ))
    : [];

  let ListComponent = itemListComponent(props.parentItemType);

  return <ListComponent>{itemList}</ListComponent>;
};

export default ItemList;
