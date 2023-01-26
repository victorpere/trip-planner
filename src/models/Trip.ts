import { Item } from "./Item";

export default interface Trip extends Item {
  type: "trip";
  items?: Item[];
}

export const tripCreator = (name: string): Trip => {
  return { name: name, type: "trip" };
};
