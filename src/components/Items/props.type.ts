import { ItemType } from "../../config/enums";
import { Item } from "../../models/Item";

export type ItemDetailProps = {
  tripId?: string;
  item: Item;
  parentItemType: ItemType;
  editable: boolean;
  onUpdate?: (item: Item) => void;
  onDelete?: () => void;
  onCreateGroup?: (newItems: Item[]) => void;
  onAddItemAndDelete?: (item: Item) => void;
};
