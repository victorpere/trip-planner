import { Group } from "./Group";
import { TripItem } from "./TripItem";

export default interface Trip extends TripItem, Group {
  name: string;
  type: "trip";
}

export const tripCreator = (name: string): Trip => {
  return { name: name, type: "trip", items: [] };
};
