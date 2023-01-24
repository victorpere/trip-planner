import { Container } from "brandi";

import { TOKENS } from "./tokens";
import { ApiService } from "../services/api-service";
import { WikipediaService } from "../services/wikipedia-service";
import TripService from "../services/trip-service";

export const container = new Container();

container.bind(TOKENS.apiService).toInstance(ApiService).inTransientScope();
container.bind(TOKENS.tripService).toInstance(TripService).inTransientScope();
container.bind(TOKENS.imageService).toInstance(WikipediaService).inTransientScope();
