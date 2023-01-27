import React, { useState } from "react";
import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";
import { ItemDetailProps } from "./props.type";

const ItemDetails = (props: ItemDetailProps) => {
  const [item] = useState<Item>(props.item);
  const ItemDetalsComponent = itemDetailsComponent(item.type);

  return <ItemDetalsComponent item={item} />;
};

export default ItemDetails;
