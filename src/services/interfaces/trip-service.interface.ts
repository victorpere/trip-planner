import Trip from "../../models/Trip";
import {
  BaseResponse,
  TripsResponse,
  TripDetailsResponse,
  CreateTripResponse,
  UpdateTripResponse,
} from "../types/response.type";

export interface ITripService {
  getOwnTrips(ownerId: string, token: string): Promise<TripsResponse>;
  getTripDetails(tripId: string, token?: string): Promise<TripDetailsResponse>;
  createNewTrip(trip: Trip, token: string): Promise<CreateTripResponse>;
  updateTrip(trip: Trip, token: string): Promise<UpdateTripResponse>;
  deleteTrip(tripId: string, token: string): Promise<BaseResponse>;
}
