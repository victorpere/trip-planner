import { ItemType } from "../../config/enums";
import ItemActivityDetails from "./ItemActivity/ItemActivityDetails";
import ItemGenericDetails from "./ItemGeneric/ItemGenericDetails";
import ItemGroupAltDetails from "./ItemGroupAlt/ItemGroupAltDetails";
import ItemGroupSeqDetails from "./ItemGroupSeq/ItemGroupSeqDetails";
import ItemTripDetails from "./ItemTrip/ItemTripDetails";

export const itemDetailsComponent = (itemType: string) => {
  switch (itemType) {
    case ItemType.trip:
      return ItemTripDetails;
    case ItemType.groupAlt:
      return ItemGroupAltDetails;
    case ItemType.groupSeq:
      return ItemGroupSeqDetails;
    case ItemType.activity:
      return ItemActivityDetails;
    default:
      return ItemGenericDetails;
  }
};
