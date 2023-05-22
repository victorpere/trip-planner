import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import ActionDialog from "../../Common/ActionDialog";
import Card from "../../Cards/Card";
import EditableText from "../../elements/EditableText/EditableText";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";

const ItemActivityDetails = (props: ItemDetailProps) => {
  const [deleting, setDeleting] = useState<boolean>(false);

  const didEditText = (key: string, text?: string) => {
    console.log("Edited ", key, " value ", text);
  };

  const deleteButtonHandler = () => {
    setDeleting(true);
  };

  const deleteConfirmButtonHandler = () => {
    props.onDelete && props.onDelete();
    setDeleting(false);
  };

  const deleteDialog = (
    <ActionDialog
      text={"Are you sure you want to delete this item?"}
      type="warning"
      buttons={[
        { label: "Yes", action: deleteConfirmButtonHandler },
        { label: "No", action: () => setDeleting(false) },
      ]}
    />
  );

  return (
    <>
      {deleting && deleteDialog}
      <Card className={styles["item-activity"]}>
        <div className="clearfix">
          <div className="float-left">
            <EditableText
              key="itemName"
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
        </div>
      </Card>
    </>
  );
};

export default ItemActivityDetails;
