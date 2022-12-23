import { Item } from "./Item";

export interface Cost extends Item {
  minAmount: number,
  maxAmount: number,
  currency: string
};
