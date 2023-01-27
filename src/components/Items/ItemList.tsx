import React from "react";

import FlexItemList from "../Cards/Lists/FlexItemList";
import ItemDetails from "./ItemDetails";
import { ItemListProps } from "./props.type";

const ItemList = (props: ItemListProps) => {
  const itemList = props.parentItem?.items?.map((item) => (
    <ItemDetails key={item.uuid} item={item} />
  ));

  if (itemList) {
    return <FlexItemList>{itemList}</FlexItemList>;
  }

  return <></>;
};

export default ItemList;
