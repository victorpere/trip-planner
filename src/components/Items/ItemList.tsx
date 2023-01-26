import React from "react";
import GroupAlternatives from "../../models/GroupAlternatives";
import GroupSequence from "../../models/GroupSequence";
import { Item } from "../../models/Item";
import FlexItemList from "../Cards/Lists/FlexItemList";
import ItemDetails from "./ItemDetails";

type Props = {
  parentItem?: Item;
  tripId?: string;
};

const ItemList = (props: Props) => {
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
