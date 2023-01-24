import { token } from "brandi";

import { IApiService } from "../services/interfaces/api-service.interface";
import { ITripService } from "../services/interfaces/trip-service.interface";
import { IImageService } from "../services/interfaces/image-service.interface";

export const TOKENS = {
  apiService: token<IApiService>("apiService"),
  tripService: token<ITripService>("tripService"),
  imageService: token<IImageService>("imageService"),
};
