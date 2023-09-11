import { Item } from "./Item";

export default interface GroupSequence extends Item {
  type: "group-seq";
  items: Item[];
}

export const groupSequenceCreator = (name: string): GroupSequence => {
  return { name: name, type: "group-seq", items: [] };
};
