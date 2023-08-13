import React from "react";

import { useTripItemService } from "../../../hooks/useTripItemService";
import { ItemDetailProps } from "../props.type";
import Card from "../../Cards/Card";

import styles from "./ItemGroupAltDetails.module.css";
import ItemList from "../ItemList";
import { FaTrashAlt } from "react-icons/fa";
import { ItemType } from "../../../config/enums";
import GroupAlternatives from "../../../models/GroupAlternatives";

const ItemGroupAltDetails = (props: ItemDetailProps) => {
  const item = props.item as GroupAlternatives;
  const { deleteItem } = useTripItemService();

  const deleteItemHandler = (deletedItemId: string) => {
    console.log("ItemGroupAltDetails deleteItemHandler", deletedItemId);
    if (props.editable && props.onUpdate && props.tripId) {
      const updatedItem = {
        ...item,
        items: item.items.filter((item) => item.uuid !== deletedItemId),
      };

      deleteItem(props.tripId, "items", deletedItemId).then(
        () => props.onUpdate && props.onUpdate(updatedItem)
      );
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
          <div className="float-right button">
            {props.editable && <FaTrashAlt />}
          </div>
        </div>
        <ItemList
          tripId={props.tripId}
          items={item.items}
          parentItemType={ItemType.groupAlt}
          editable={props.editable}
          onDeleteItem={deleteItemHandler}
        />
      </Card>
    </>
  );
};

export default ItemGroupAltDetails;
