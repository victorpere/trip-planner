import React from "react";

import Card from "../Cards/Card";
import { ItemDetailProps } from "./props.type";

const ItemActivityDetails = (props: ItemDetailProps) => {
  return <Card>activity {props.item.name}</Card>;
};

export default ItemActivityDetails;
