import { Item } from "../../models/Item";

export type ItemDetailProps = {
  tripId?: string;
  item: Item;
  editable: boolean;
  onUpdate?: () => void;
  onDelete?: () => void;
};
