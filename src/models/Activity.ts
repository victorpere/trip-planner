import { Item } from "./Item";

export interface Activity extends Item {
    type: "activity",
    date?: Date
}