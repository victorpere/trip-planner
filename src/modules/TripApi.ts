import { Api } from "./Api";
import { authHeader } from "./Utils";

export class TripApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getOwnTrips(ownerId: string, token: string): Promise<any> {
    const route = `/users/${ownerId}/owntrips`;
    const headers = { ...authHeader(token) };

    const response = await this.api.get(route, {}, headers);
    // TOOD: parse response
    // TODO: error checking
    return response;
  }
}
