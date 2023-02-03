import React from "react";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { itemListComponent } from "./utilities";

type Props = {
  tripId?: string;
  items?: Item[];
  parentItemType?: string;
  editable?: boolean;
};

const ItemList = (props: Props) => {
  const onItemDelete = (itemId: string) => {
    console.log("delete item from list", itemId);
    // TODO: use state and delete item from list
  };

  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item) => (
        <ItemDetails
          key={item.uuid}
          tripId={props.tripId}
          item={item}
          onDelete={onItemDelete}
        />
      ))
    : [];

  let ListComponent = itemListComponent(props.parentItemType);

  return <ListComponent>{itemList}</ListComponent>;
};

export default ItemList;
