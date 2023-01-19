import { Item } from "./Item";

export default interface Trip extends Item {
  type?: "trip";
}

export const tripCreator = (name: string): Trip => {
  return { name: name };
};
