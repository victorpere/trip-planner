import { Item } from "../../models/Item";

export type ItemDetailProps = {
  item: Item;
  editable?: boolean;
};

export type ItemListProps = {
  parentItem?: Item;
  tripId?: string;
};
