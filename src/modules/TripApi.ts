import Trip from "../models/Trip";
import { IApiService } from "./api-service.interface";
import { authHeader } from "./utilities";

type EmptyResponse = {
  error?: string;
};

type TripsResponse = {
  trips: Trip[];
  error?: string;
};

type TripDetailsResponse = {
  trip?: Trip;
  editable?: boolean;
  error?: string;
};

type CreateTripResponse = {
  tripId?: string;
  error?: string;
};

export default class TripApi {
  private readonly baseUrl = process.env.REACT_APP_API_URL!;
  private api: IApiService;

  constructor(api: IApiService) {
    this.api = api;
  }

  /**
   * Returns trips of the specified owner
   * @param ownerId
   * @param token
   * @returns array of trips of the specified owner and optional error
   */
  async getOwnTrips(ownerId: string, token: string): Promise<TripsResponse> {
    const route = `/users/${ownerId}/owntrips`;
    const headers = { ...authHeader(token) };

    try {
      const response = await this.api.get(this.baseUrl + route, {}, headers);

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

  /**
   * Returns the specified trip
   * @param tripId
   * @param token
   * @returns trip object and optional error
   */
  async getTripDetails(
    tripId: string,
    token?: string
  ): Promise<TripDetailsResponse> {
    const route = token ? `/trips/${tripId}` : `/public/trips/${tripId}`;
    const headers = token ? { ...authHeader(token) } : {};

    try {
      const response = await this.api.get(this.baseUrl + route, {}, headers);

      if (response.ok) {
        const body = await response.json();
        if (body["data"]) {
          return { trip: body["data"], editable: body["editable"] };
        }
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  /**
   * Creates a new trip
   * @param trip
   * @param token
   * @returns new trip id and optional error
   */
  async createNewTrip(trip: Trip, token: string): Promise<CreateTripResponse> {
    const route = "/trips";
    const headers = { ...authHeader(token) };
    const body = { trip: trip };

    try {
      const response = await this.api.post(
        this.baseUrl + route,
        {},
        headers,
        body
      );

      if (response.ok) {
        const body = await response.json();
        if (body["tripId"]) {
          return { tripId: body["tripId"] };
        } else {
          return { error: "something went wrong" };
        }
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }

  async deleteTrip(tripId: string, token: string): Promise<EmptyResponse> {
    const route = `/trips/${tripId}`;
    const headers = { ...authHeader(token) };

    try {
      const response = await this.api.delete(this.baseUrl + route, {}, headers);
      if (response.ok) {
        return {};
      }

      return { error: response.statusText };
    } catch (e: any) {
      return { error: e.message };
    }
  }
}
