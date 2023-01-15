import { Container, token } from "brandi";

import { Api } from "../modules/Api";
import { ApiService } from "../modules/ApiService";

export const TOKENS = {
  api: token<Api>("api"),
};

export const container = new Container();

container.bind(TOKENS.api).toInstance(ApiService).inTransientScope();
