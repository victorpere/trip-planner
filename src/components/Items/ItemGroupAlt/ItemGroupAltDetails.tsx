import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupAltDetails.module.css";
import ItemList from "../ItemList";
import { FaTrashAlt } from "react-icons/fa";
import { ItemType } from "../../../config/enums";
import GroupAlternatives from "../../../models/GroupAlternatives";

const ItemGroupAltDetails = (props: ItemDetailProps) => {
  return (
    <>
      <Card className={styles["item-group-alt"]}>
        <div>ALTERNATIVES GROUP</div>
        <div className="clearfix">
          <div className="float-left">
            <div>{props.item.name}</div>
          </div>
          <div className="float-right button">
            {props.editable && <FaTrashAlt />}
          </div>
        </div>
        <ItemList
          tripId={props.tripId}
          items={(props.item as GroupAlternatives).items}
          parentItemType={ItemType.groupAlt}
          editable={props.editable}
        />
      </Card>
    </>
  );
};

export default ItemGroupAltDetails;
