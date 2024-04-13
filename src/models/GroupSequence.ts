import { Group } from "./Group";

export default interface GroupSequence extends Group {
  type: "group-seq";
}

export const groupSequenceCreator = (name: string): GroupSequence => {
  return { name: name, type: "group-seq", items: [] };
};
