import { Item } from "./Item";

export default interface GroupAlternatives extends Item {
  type: "group-alt";
  items: Item[];
}
