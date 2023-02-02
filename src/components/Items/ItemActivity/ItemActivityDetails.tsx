import React from "react";

import Card from "../../Cards/Card";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";

const ItemActivityDetails = (props: ItemDetailProps) => {
  return (
    <Card className={styles["item-activity"]}>
      <div>activity {props.item.name}</div>
      <div>
        <FlightDetails />
      </div>
    </Card>
  );
};

export default ItemActivityDetails;
