import React from "react";

import { itemDetailsComponent } from "./utilities";
import { ItemDetailProps } from "./props.type";

const ItemDetails = (props: ItemDetailProps) => {
  const ItemDetalsComponent = itemDetailsComponent(props.item.type);

  return <ItemDetalsComponent item={props.item} />;
};

export default ItemDetails;
