import { injected } from "brandi";

import { TOKENS } from "../config/tokens";
import { Item } from "../models/Item";
import { IApiService } from "./interfaces/api-service.interface";
import { ITripItemService } from "./interfaces/trip-item-service.interface";
import { CreateItemResponse, BaseResponse } from "./types/response.type";
import { authHeader } from "./utilities";

export default class TripItemService implements ITripItemService {
  private readonly baseUrl = process.env.REACT_APP_API_URL!;
  private apiService: IApiService;

  constructor(apiService: IApiService) {
    this.apiService = apiService;
  }

  async createItem(
    tripId: string,
    parentItemType: string,
    parentItemId: string,
    itemType: string,
    item: Item,
    token: string
  ): Promise<CreateItemResponse> {
    const route = `/trips/${tripId}/${parentItemType}/${parentItemId}/${itemType}`;
    const headers = { ...authHeader(token) };
    const body = { item: item };

    try {
      const response = await this.apiService.post(
        this.baseUrl + route,
        {},
        headers,
        body
      );

      if (response.ok) {
        const body = await response.json();
        if (body["itemId"]) {
          return { itemId: body["itemId"] };
        } else {
          return { error: "no itemId" };
        }
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  async deleteItem(
    tripId: string,
    itemType: string,
    itemId: string,
    token: string
  ): Promise<BaseResponse> {
    const route = `/trips/${tripId}/${itemType}/${itemId}`;
    const headers = { ...authHeader(token) };

    try {
      const response = await this.apiService.delete(
        this.baseUrl + route,
        {},
        headers
      );

      if (response.ok) {
        return {};
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  async updateItem(
    tripId: string,
    itemType: string,
    itemId: string,
    item: Item,
    token: string
  ): Promise<BaseResponse> {
    const route = `/trips/${tripId}/${itemType}/${itemId}`;
    const headers = { ...authHeader(token) };
    const body = { "item": item };

    try {
      const response = await this.apiService.put(
        this.baseUrl + route,
        {},
        headers,
        body
      );

      if (response.ok) {
        return {};
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  async patchItem(
    tripId: string,
    itemType: string,
    itemId: string,
    item: Item,
    token: string
  ): Promise<BaseResponse> {
    const route = `/trips/${tripId}/${itemType}/${itemId}`;
    const headers = { ...authHeader(token) };
    const body = { "item": item };

    try {
      const response = await this.apiService.patch(
        this.baseUrl + route,
        {},
        headers,
        body
      );

      if (response.ok) {
        return {};
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }
}

injected(TripItemService, TOKENS.apiService);
