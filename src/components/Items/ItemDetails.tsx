import React, { useState } from "react";

import { Item } from "../../models/Item";
import { itemDetailsComponent } from "./utilities";
import { useTripItemService } from "../../hooks/useTripItemService";

type Props = {
  item: Item;
  tripId?: string;
  onDelete?: (itemId: string) => void;
};

const ItemDetails = (props: Props) => {
  const [item] = useState(props.item);
  const { deleteItem } = useTripItemService();
  const ItemDetalsComponent = itemDetailsComponent(item.type);

  const deleteHandler = () => {
    console.log("delete item ", item.uuid);
    if (props.tripId && item.uuid) {
      deleteItem(props.tripId, "items", item.uuid).then(() => {
        console.log("deleted item ", item.uuid);
        props.onDelete && item.uuid && props.onDelete(item.uuid);
      });
    }
  };

  return <ItemDetalsComponent item={item} onDelete={deleteHandler} />;
};

export default ItemDetails;
