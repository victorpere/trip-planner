import { Trip } from "../models/Trip";
import { Api } from "./Api";
import { authHeader } from "./Utils";

type TripsResponse = {
  trips: Trip[];
  error?: string;
};

export class TripApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getOwnTrips(ownerId: string, token: string): Promise<TripsResponse> {
    const route = `/users/${ownerId}/owntrips`;
    const headers = { ...authHeader(token) };

    try {
      const response = await this.api.get(route, {}, headers);

      if (response.ok) {
        const body = await response.json();
        if (body["data"]) {
          return { trips: body["data"] };
        }
      }

      return { trips: [], error: response.statusText };
    } catch (e: any) {
      return { trips: [], error: e.message };
    }
  }
}
