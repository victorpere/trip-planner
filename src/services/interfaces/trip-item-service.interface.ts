import { Item } from "../../models/Item";
import { BaseResponse, CreateItemResponse } from "../types/response.type";

export interface ITripItemService {
  createItem(
    tripId: string,
    parentItemType: string,
    parentItemId: string,
    itemType: string,
    item: Item,
    token: string
  ): Promise<CreateItemResponse>;
  deleteItem(
    tripId: string,
    itemType: string,
    itemId: string,
    token: string
  ): Promise<BaseResponse>;
  updateItem(
    tripId: string,
    itemType: string,
    itemId: string,
    item: Item,
    token: string
  ): Promise<BaseResponse>;
  patchItem(
    tripId: string,
    itemType: string,
    itemId: string,
    item: Item,
    token: string
  ): Promise<BaseResponse>;
}
