import Trip from "../../models/Trip";

export type BaseResponse = {
  error?: string;
};

export type TripsResponse = BaseResponse & {
  trips: Trip[];
};

export type TripDetailsResponse = BaseResponse & {
  trip?: Trip;
  editable?: boolean;
};

export type CreateTripResponse = BaseResponse & {
  tripId?: string;
};

export type UpdateTripResponse = BaseResponse & {
  trip?: Trip;
};

export type CreateItemResponse = BaseResponse & {
  itemId?: string;
};
