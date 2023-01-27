import { ItemType } from "../../config/enums";
import ItemActivityDetails from "./ItemActivityDetails";
import ItemGenericDetails from "./ItemGenericDetails";
import ItemGroupAltDetails from "./ItemGroupAltDetails";
import ItemGroupSeqDetails from "./ItemGroupSeqDetails";
import ItemTripDetails from "./ItemTripDetails";

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
