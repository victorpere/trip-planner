import { Item } from "./Item";

export default interface GroupSequence extends Item {
  type: "group-seq";
  items: Item[];
}
