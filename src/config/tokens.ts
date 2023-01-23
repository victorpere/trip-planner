import { token } from "brandi";

import { IApiService } from "../modules/api-service.interface";
import { IImageService } from "../modules/image-service.interface";

export const TOKENS = {
  apiService: token<IApiService>("apiService"),
  imageService: token<IImageService>("imageService"),
};
