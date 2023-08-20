import { ItemType } from "../../config/enums";
import { Item } from "../../models/Item";

export type ItemDetailProps = {
  tripId?: string;
  item: Item;
  parentItemType: ItemType;
  editable: boolean;
  onUpdate?: (item: Item, push?: boolean) => void;
  onDelete?: () => void;
  onCreateGroup?: (newItems: Item[]) => void;
};
