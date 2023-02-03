import React from "react";

import { FaTrashAlt } from "react-icons/fa";

import Card from "../../Cards/Card";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";

const ItemActivityDetails = (props: ItemDetailProps) => {
  // TODO: warning dialog on delete

  return (
    <Card className={styles["item-activity"]}>
      <div className="clearfix">
        <div className="float-left">{props.item.name}</div>
        <div className="float-left">
          <FlightDetails />
        </div>
        <div className="float-right button">
          <FaTrashAlt onClick={props.onDelete} />
        </div>
      </div>
    </Card>
  );
};

export default ItemActivityDetails;
