import React from "react";

import FlexItemList from "../Cards/Lists/FlexItemList";
import ItemDetails from "./ItemDetails";
import { Item } from "../../models/Item";

type Props = {
  items?: Item[];
  parentItemType?: string;
  editable?: boolean;
};

const ItemList = (props: Props) => {
  const itemList: JSX.Element[] = props.items
    ? props.items?.map((item) => <ItemDetails key={item.uuid} item={item} />)
    : [];

  return <FlexItemList>{itemList}</FlexItemList>;
};

export default ItemList;
