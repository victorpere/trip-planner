import { Item } from "./Item";

export interface TripItem extends Item {
  imageUrl?: string;
  startDate?: Date;
  endDate?: Date;
}