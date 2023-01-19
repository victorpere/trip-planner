import React, { useState } from "react";
import { Item } from "../../models/Item";
import Card from "../Cards/Card";

type Props<T extends Item> = {
  createItem: (name: string) => T;
  onCreateNewItem: (item: T) => void;
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
      const item = props.createItem(itemName);
      props.onCreateNewItem(item);
    } else {
      // TODO: popup message
    }
  };

  if (isBeingAdded) {
    return (
      <Card>
        <input type="text" value={itemName} onChange={itemNameChangeHandler} />
        <button onClick={createItemButtonClickHandler}>CREATE</button>
      </Card>
    );
  }

  return (
    <Card>
      <button onClick={addButtonClickHandler}>ADD</button>
    </Card>
  );
};

export default NewItem;
