import { token } from "brandi";

import { Api } from "../modules/Api";
import { IImageService } from "../modules/image-service.interface";

export const TOKENS = {
  api: token<Api>("api"),
  imageService: token<IImageService>("imageService"),
};
