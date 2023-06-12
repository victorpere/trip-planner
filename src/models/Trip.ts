import { Item } from "./Item";

export default interface Trip extends Item {
  name: string;
  type: "trip";
  items?: Item[];
}

export const tripCreator = (name: string): Trip => {
  return { name: name, type: "trip" };
};
