import Trip from "../../models/Trip";
import {
  BaseResponse,
  TripsResponse,
  TripDetailsResponse,
  CreateTripResponse,
} from "../types/response.type";

export interface ITripService {
  getOwnTrips(ownerId: string, token: string): Promise<TripsResponse>;
  getTripDetails(tripId: string, token?: string): Promise<TripDetailsResponse>;
  createNewTrip(trip: Trip, token: string): Promise<CreateTripResponse>;
  updateTrip(trip: Trip, token: string): Promise<BaseResponse>;
  deleteTrip(tripId: string, token: string): Promise<BaseResponse>;
}
