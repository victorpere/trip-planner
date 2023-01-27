import GroupAlternatives from "../../models/GroupAlternatives";
import GroupSequence from "../../models/GroupSequence";
import { Item } from "../../models/Item";
import Trip from "../../models/Trip";

export type ItemDetailProps = {
  item: Item;
  editable?: boolean;
};

export type ItemListProps = {
  parentItem?: Trip | GroupAlternatives | GroupSequence;
  tripId?: string;
};
