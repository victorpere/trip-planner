import { TripItem } from "./TripItem";

export interface Activity extends TripItem {
  type: "activity";
  activity?: string;
}

export const activityCreator = (name: string): Activity => {
  return { name: name, type: "activity" };
};
