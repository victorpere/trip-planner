import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import ActionDialog from "./ActionDialog";

type Props = {
  visible: boolean;
  enabled: boolean;
  itemType?: string;
  itemName?: string;
  onConfirmDelete?: () => void;
};

const DeleteButton = (props: Props) => {
  const [deleting, setDeleting] = useState<boolean>(false);

  const deleteButtonHandler = () => {
    props.enabled && setDeleting(true);
  };

  const deleteConfirmHandler = () => {
    props.enabled && props.onConfirmDelete && props.onConfirmDelete();
    setDeleting(false);
  };

  const deleteDialog = (
    <ActionDialog
      text={"WarningDeleteItem"}
      textVars={{ itemType: props.itemType, itemName: props.itemName }}
      type="warning"
      buttons={[
        { label: "Yes", action: deleteConfirmHandler },
        { label: "No", action: () => setDeleting(false) },
      ]}
    />
  );

  return (
    <>
      {props.visible && props.enabled && deleting && deleteDialog}
      {props.visible && <FaTrashAlt onClick={deleteButtonHandler} />}
    </>
  );
};

export default DeleteButton;
