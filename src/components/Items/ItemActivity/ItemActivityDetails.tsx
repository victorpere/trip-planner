import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import { useTripItemService } from "../../../hooks/useTripItemService";
import ActionDialog from "../../Common/ActionDialog";
import Card from "../../Cards/Card";
import EditableText from "../../elements/EditableText/EditableText";
import FlightDetails from "../Details/FlightDetails";
import { ItemDetailProps } from "../props.type";

import styles from "./ItemDetails.module.css";

const ItemActivityDetails = (props: ItemDetailProps) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const { patchItem } = useTripItemService();

  const didEditText = (key: string, text?: string) => {
    console.log("Edited ", key, " to value ", text);
    if (props.tripId && props.item.uuid && text) {
      patchItem(props.tripId, "items", props.item.uuid, {
        uuid: props.item.uuid,
        type: props.item.type,
        name: text,
      }).then(() => {
        console.log("updated db");
      });
    }
  };

  const deleteButtonHandler = () => {
    props.editable && setDeleting(true);
  };

  const deleteConfirmButtonHandler = () => {
    props.editable && props.onDelete && props.onDelete();
    setDeleting(false);
  };

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

  return (
    <>
      {deleting && deleteDialog}
      <Card className={styles["item-activity"]}>
        <div className="clearfix">
          <div className="float-left">
            <EditableText
              fieldName="itemName"
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
