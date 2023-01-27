import { Item } from "./Item";

export interface Activity extends Item {
  type: "activity";
  date?: Date;
}

export const activityCreator = (name: string): Activity => {
  return { name: name, type: "activity" };
};
