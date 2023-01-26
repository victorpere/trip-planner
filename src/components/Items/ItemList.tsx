import React from "react";
import { Item } from "../../models/Item";
import Trip from "../../models/Trip";
import FlexItemList from "../Cards/Lists/FlexItemList";
import ItemDetails from "./ItemDetails";

type Props = {
  item?: Item;
  tripId?: string;
};

const ItemList = (props: Props) => {
  switch (props.item?.type) {
    case "trip":
      const item = props.item as Trip;
      <FlexItemList parentItemType="trip">
        {item?.items?.map((item) => (
          <ItemDetails key={item.uuid} item={item} />
        ))}
      </FlexItemList>;
      break;
    default:
  }

  return <></>;
};

export default ItemList;
