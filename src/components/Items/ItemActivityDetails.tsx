import React from "react";

import Card from "../Cards/Card";
import FlightDetails from "./Details/FlightDetails";
import { ItemDetailProps } from "./props.type";

const ItemActivityDetails = (props: ItemDetailProps) => {
  return (
    <Card>
      <div>activity {props.item.name}</div>
      <div>
        <FlightDetails />
      </div>
    </Card>
  );
};

export default ItemActivityDetails;
