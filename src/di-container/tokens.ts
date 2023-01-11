import { token } from "brandi";

import { Api } from "../modules/Api";

export const TOKENS = {
  api: token<Api>("api"),
};
