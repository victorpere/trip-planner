import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupAltDetails.module.css";
import ItemList from "../ItemList";
import { ItemType } from "../../../config/enums";
import GroupAlternatives from "../../../models/GroupAlternatives";

const ItemGroupAltDetails = (props: ItemDetailProps) => {
  const itemGroupAlt = props.item as GroupAlternatives;

  const deleteItemHandler = (deletedItemId: string) => {
    console.log("ItemGroupAltDetails deleteItemHandler", deletedItemId);
    if (props.editable && props.onUpdate && props.tripId) {
      const updatedItemGroupAlt = {
        ...itemGroupAlt,
        items: itemGroupAlt.items.filter((item) => item.uuid !== deletedItemId),
      };

      if (updatedItemGroupAlt.items.length === 0) {
        props.onDelete && props.onDelete();
      } else if (updatedItemGroupAlt.items.length === 1) {
        // TODO: move remaining item one level up and delete self
        props.onUpdate(updatedItemGroupAlt);
      } else {
        props.onUpdate(updatedItemGroupAlt);
      }
    }
  };

  return (
    <>
      <Card className={styles["item-group-alt"]}>
        <div>ALTERNATIVES GROUP</div>
        <div className="clearfix">
          <div className="float-left">
            <div>{props.item.name}</div>
          </div>
        </div>
        <ItemList
          tripId={props.tripId}
          items={itemGroupAlt.items}
          parentItemType={ItemType.groupAlt}
          editable={props.editable}
          onDeleteItem={deleteItemHandler}
        />
      </Card>
    </>
  );
};

export default ItemGroupAltDetails;
