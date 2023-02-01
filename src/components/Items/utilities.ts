import { ItemType } from "../../config/enums";
import FlexItemList from "../Cards/Lists/FlexItemList";
import VerticalList from "../Cards/Lists/VerticalList";
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

export const itemListComponent = (parentItemType?: string) => {
  switch (parentItemType) {
    case ItemType.trip:
      return VerticalList;
    default:
      return FlexItemList;
  }
};
