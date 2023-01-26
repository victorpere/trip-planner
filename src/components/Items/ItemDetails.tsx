import React, { useState, useEffect } from "react";
import { Item } from "../../models/Item";
import ItemList from "./ItemList";

type Props = {
  item: Item;
};

const ItemDetails = (props: Props) => {
  const [item, setItem] = useState<Item>(props.item);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  return (
    <div>
      {item.type}: {item.name}
      <ItemList parentItem={item} tripId={item.uuid} />
    </div>
  );
};

export default ItemDetails;
