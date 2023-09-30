import React from "react";

import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupAltDetails.module.css";
import ItemList from "../ItemList";
import { ItemType } from "../../../config/enums";
import GroupAlternatives from "../../../models/GroupAlternatives";
import { Item } from "../../../models/Item";
import FlexItemList from "../../Cards/Lists/FlexItemList";

const ItemGroupAltDetails = (props: ItemDetailProps) => {
  const itemGroupAlt = props.item as GroupAlternatives;

  const updateItemListHandler = (updatedItems?: Item[]) => {
    console.log("ItemGroupAltDetails updateItemListHandler", updatedItems);
    if (props.editable && props.onUpdate) {
      if (!updatedItems || updatedItems.length === 0) {
        props.onDelete && props.onDelete();
      } else if (updatedItems.length === 1) {
        // move remaining item one level up and delete self
        if (props.onAddItemAndDelete && props.onDelete) {
          props.onAddItemAndDelete(updatedItems[0]);
        } else {
          const updatedGroup = { ...props.item, items: updatedItems };
          props.onUpdate && props.onUpdate(updatedGroup);
        }
      } else {
        const updatedGroup = { ...props.item, items: updatedItems };
        props.onUpdate && props.onUpdate(updatedGroup);
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
          onUpdate={updateItemListHandler}
          listComponent={FlexItemList}
        />
      </Card>
    </>
  );
};

export default ItemGroupAltDetails;
