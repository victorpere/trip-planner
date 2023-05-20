import React from "react";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { itemListComponent } from "./utilities";

type Props = {
  editable: boolean;
  tripId?: string;
  items?: Item[];
  parentItemType?: string;
  onDeleteItem: (itemId: string) => void;
};

const ItemList = (props: Props) => {

  const deleteItemHandler = (itemId: string) => {
    console.log("delete item from list", itemId);
    props.onDeleteItem(itemId);
  };

  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item) => (
        <ItemDetails
          key={item.uuid}
          tripId={props.tripId}
          item={item}
          editable={props.editable}
          onDelete={deleteItemHandler}
        />
      ))
    : [];

  let ListComponent = itemListComponent(props.parentItemType);

  return <ListComponent>{itemList}</ListComponent>;
};

export default ItemList;
