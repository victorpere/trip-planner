import { Container } from "brandi";

import { TOKENS } from "./tokens";
import { ApiService } from "../modules/ApiService";

export const container = new Container();

container.bind(TOKENS.api).toInstance(ApiService).inTransientScope();
