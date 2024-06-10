import React, { useState } from "react";

import Card from "../../Cards/Card";
import EditableText from "../../elements/EditableText/EditableText";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";
import { ItemType } from "../../../config/enums";
import ItemActivityNew from "./ItemActivityNew";
import { Activity } from "../../../models/Activity";
import { Item } from "../../../models/Item";
import DeleteButton from "../../Common/DeleteButton";

const ItemActivityDetails = (props: ItemDetailProps) => {
  const [creatingAlt, setCreatingAlt] = useState<boolean>(false);

  const didEditText = (key: string, text?: string) => {
    console.log("Edited ", key, " to value ", text);
    const updatedItem: { [index: string]: any } = { ...props.item };
    updatedItem[key] = text;

    props.editable && props.onUpdate && props.onUpdate(updatedItem as Item);
  };

  const alternativeButtonHandler = () => {
    console.log("ItemActivityDetails alternativeButtonHandler");
    setCreatingAlt(true);
  };

  const alternativeCreatedHandler = (newActivity: Activity) => {
    console.log("ItemActivityDetails alternativeCreatedHandler", newActivity);

    // TODO: pass this item and new item up

    props.editable && props.onCreateGroup && props.onCreateGroup([newActivity]);
    setCreatingAlt(false);
  };

  const createAltDialog = (
    <ItemActivityNew
      onCreate={alternativeCreatedHandler}
      onCancel={() => {
        setCreatingAlt(false);
      }}
    />
  );

  // TODO: item categories

  return (
    <>
      {props.editable && creatingAlt && createAltDialog}
      <Card className={styles["item-activity"]}>
        <div className="clearfix">
          <div className="float-left">
            <EditableText
              fieldName="name"
              editable={props.editable ?? false}
              text={props.item.name}
              onFinishedEditing={didEditText}
            />
          </div>
          <div className="float-left">
            <FlightDetails />
          </div>

          <div className="float-right button">
            <DeleteButton
              visible={props.editable}
              enabled={props.editable}
              itemType={props.item.type}
              itemName={props.item.name}
              onConfirmDelete={props.onDelete}
            />
          </div>
          {props.editable && props.parentItemType !== ItemType.groupAlt && (
            <button
              className="float-right button"
              onClick={alternativeButtonHandler}
            >
              Add alternative
            </button>
          )}
        </div>
      </Card>
    </>
  );
};

export default ItemActivityDetails;
