import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupSeqDetails.module.css";
import ItemList from "../ItemList";
import GroupSequence from "../../../models/GroupSequence";
import { FaTrashAlt } from "react-icons/fa";
import { ItemType } from "../../../config/enums";
import { Item } from "../../../models/Item";
import VerticalList from "../../Cards/Lists/VerticalList";

const ItemGroupSeqDetails = (props: ItemDetailProps) => {
  const itemsUpdateHandler = (updatedItems?: Item[]) => {
    if (props.editable && props.onUpdate) {
      const updatedGroup = { ...props.item, items: updatedItems };
      props.onUpdate(updatedGroup);
    }
  };

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
          onUpdate={itemsUpdateHandler}
          listComponent={VerticalList}
        />
      </Card>
    </>
  );
};

export default ItemGroupSeqDetails;
