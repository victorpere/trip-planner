import React from "react";

import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";
import { itemListComponent } from "./utilities";

type Props = {
  items?: Item[];
  parentItemType?: string;
  editable?: boolean;
};

const ItemList = (props: Props) => {
  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item) => <ItemDetails key={item.uuid} item={item} />)
    : [];

  let ListComponent = itemListComponent(props.parentItemType);

  return <ListComponent>{itemList}</ListComponent>;
};

export default ItemList;
