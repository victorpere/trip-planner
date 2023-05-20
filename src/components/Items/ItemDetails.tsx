import React, { useState } from "react";

import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";

type Props = {
  item: Item;
  editable: boolean;
  tripId?: string;
  onDelete?: (itemId: string) => void;
};

const ItemDetails = (props: Props) => {
  const [item] = useState(props.item);
  const ItemDetalsComponent = itemDetailsComponent(item.type);

  const deleteHandler = () => {
    console.log("delete item ", item.uuid);
    props.onDelete && item.uuid && props.onDelete(item.uuid);
  };

  return (
    <ItemDetalsComponent
      tripId={props.tripId}
      item={item}
      editable={props.editable}
      onDelete={deleteHandler}
    />
  );
};

export default ItemDetails;
