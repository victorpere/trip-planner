import React, { useState } from "react";
import { Item } from "../../models/Item";
import Card from "../Cards/Card";
import Dialog from "../elements/Dialog/Dialog";

type Props<T extends Item> = {
  createItem: (name: string) => T;
  onCreateNewItem: (item: T) => void;
  onCancel?: () => void;
  label?: string;
};

const NewItem = <T extends Item>(props: Props<T>) => {
  const [isBeingAdded, setIsBeingAdded] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>("");

  const addButtonClickHandler = () => {
    setIsBeingAdded(true);
  };

  const itemNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemName(event.target.value);
  };

  const createItemButtonClickHandler = () => {
    if (itemName) {
      setIsBeingAdded(false);
      setItemName("");
      const item = props.createItem(itemName);
      props.onCreateNewItem(item);
    } else {
      // TODO: popup message
    }
  };

  const cancelButtonClickHandler = () => {
    setIsBeingAdded(false);
    setItemName("");
  };

  if (isBeingAdded) {
    return (
      <Dialog>
        <Card>
          <span>{props.label ?? ""}</span>
          <input
            type="text"
            value={itemName}
            onChange={itemNameChangeHandler}
          />
          <button onClick={createItemButtonClickHandler}>CREATE</button>
          <button onClick={cancelButtonClickHandler}>CANCEL</button>
        </Card>
      </Dialog>
    );
  }

  return (
    <Card>
      <button onClick={addButtonClickHandler}>ADD</button>
    </Card>
  );
};

export default NewItem;
