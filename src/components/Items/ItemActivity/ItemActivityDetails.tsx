import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import ActionDialog from "../../Common/ActionDialog";
import Card from "../../Cards/Card";
import EditableText from "../../elements/EditableText/EditableText";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";
import { ItemType } from "../../../config/enums";
import ItemActivityNew from "./ItemActivityNew";
import { Activity } from "../../../models/Activity";
import { Item } from "../../../models/Item";

const ItemActivityDetails = (props: ItemDetailProps) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [creatingAlt, setCreatingAlt] = useState<boolean>(false);

  const didEditText = (key: string, text?: string) => {
    console.log("Edited ", key, " to value ", text);
    const updatedItem: {[index: string]: any} = {...props.item};
    updatedItem[key] = text;

    props.editable && props.onUpdate && props.onUpdate(updatedItem as Item);
  };

  const deleteButtonHandler = () => {
    props.editable && setDeleting(true);
  };

  const alternativeButtonHandler = () => {
    console.log("ItemActivityDetails alternativeButtonHandler");
    setCreatingAlt(true);
  };

  const deleteConfirmButtonHandler = () => {
    props.editable && props.onDelete && props.onDelete();
    setDeleting(false);
  };

  const alternativeCreatedHandler = (newActivity: Activity) => {
    console.log("ItemActivityDetails alternativeCreatedHandler", newActivity);

    // TODO: pass this item and new item up

    props.editable && props.onCreateGroup && props.onCreateGroup([newActivity]);
    setCreatingAlt(false);
  }

  const deleteDialog = (
    <ActionDialog
      text={"WarningDeleteItem"}
      textVars={{ itemType: props.item.type, itemName: props.item.name }}
      type="warning"
      buttons={[
        { label: "Yes", action: deleteConfirmButtonHandler },
        { label: "No", action: () => setDeleting(false) },
      ]}
    />
  );

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
      {props.editable && deleting && deleteDialog}
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
            {props.editable && <FaTrashAlt onClick={deleteButtonHandler} />}
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
