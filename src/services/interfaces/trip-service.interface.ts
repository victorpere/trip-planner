import Trip from "../../models/Trip";

export type EmptyResponse = {
  error?: string;
};

export type TripsResponse = {
  trips: Trip[];
  error?: string;
};

export type TripDetailsResponse = {
  trip?: Trip;
  editable?: boolean;
  error?: string;
};

export type CreateTripResponse = {
  tripId?: string;
  error?: string;
};

export interface ITripService {
  getOwnTrips(ownerId: string, token: string): Promise<TripsResponse>;
  getTripDetails(tripId: string, token?: string): Promise<TripDetailsResponse>;
  createNewTrip(trip: Trip, token: string): Promise<CreateTripResponse>;
  updateTrip(trip: Trip, token: string): Promise<EmptyResponse>
  deleteTrip(tripId: string, token: string): Promise<EmptyResponse>
}
