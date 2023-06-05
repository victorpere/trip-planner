import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupSeqDetails.module.css";
import ItemList from "../ItemList";
import GroupSequence from "../../../models/GroupSequence";
import { FaTrashAlt } from "react-icons/fa";
import { ItemType } from "../../../config/enums";

const ItemGroupSeqDetails = (props: ItemDetailProps) => {
  return (
    <>
      <Card className={styles["item-group-seq"]}>
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
          items={(props.item as GroupSequence).items}
          parentItemType={ItemType.groupSeq}
          editable={props.editable}
        />
      </Card>
    </>
  );
};

export default ItemGroupSeqDetails;
