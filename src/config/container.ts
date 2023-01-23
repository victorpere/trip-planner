import { Container } from "brandi";

import { TOKENS } from "./tokens";
import { ApiService } from "../modules/ApiService";
import { WikipediaService } from "../modules/wikipedia-service";

export const container = new Container();

container.bind(TOKENS.api).toInstance(ApiService).inTransientScope();
container.bind(TOKENS.imageService).toInstance(WikipediaService).inTransientScope();
