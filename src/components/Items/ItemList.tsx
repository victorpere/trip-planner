import React from "react";
import GroupAlternatives from "../../models/GroupAlternatives";
import GroupSequence from "../../models/GroupSequence";
import FlexItemList from "../Cards/Lists/FlexItemList";
import ItemDetails from "./ItemDetails";
import { ItemListProps } from "./props.type";

const ItemList = (props: ItemListProps) => {
  let itemList: JSX.Element[];

  switch (props.parentItem?.type) {
    case "group-seq":
      itemList = (props.parentItem as GroupSequence)?.items?.map((group) => (
        <ItemDetails key={group.uuid} item={group} />
      ));
      break;
    case "group-alt":
      itemList = (props.parentItem as GroupAlternatives)?.items?.map(
        (group) => <ItemDetails key={group.uuid} item={group} />
      );
      break;
    default:
      itemList = [];
  }

  return <FlexItemList>{itemList}</FlexItemList>;
};

export default ItemList;
