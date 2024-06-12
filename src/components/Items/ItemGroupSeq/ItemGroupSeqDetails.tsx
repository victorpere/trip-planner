import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupSeqDetails.module.css";
import ItemList from "../ItemList";
import GroupSequence from "../../../models/GroupSequence";
import { ItemType } from "../../../config/enums";
import { Item } from "../../../models/Item";
import VerticalList from "../../Cards/Lists/VerticalList";
import DeleteButton from "../../Common/DeleteButton";

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
            <DeleteButton
              visible={props.editable && (props.item as GroupSequence).items.length === 0}
              enabled={props.editable}
              itemType={props.item.type}
              itemName={props.item.name}
              onConfirmDelete={props.onDelete}
            />
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
