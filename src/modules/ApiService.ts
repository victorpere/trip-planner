import { Api } from "./Api";
import { queryString } from "./utilities";

// TODO: querystring params

export class ApiService implements Api {
  async get(route: string, params: {}, headers: {}): Promise<Response> {
    console.log("api.get");
    console.log(route);
    console.log(params);
    console.log(headers);
    const response = await fetch(route + queryString(params), {
      method: "GET",
      headers: headers,
    });
    console.log(response);
    return response;
  }

  async post(
    route: string,
    params: {},
    headers: {},
    body: {}
  ): Promise<Response> {
    console.log("api.post");
    console.log(route);
    console.log(params);
    console.log(headers);
    console.log(body);
    const response = await fetch(route + queryString(params), {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log(response);
    return response;
  }

  put(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  async delete(route: string, params: {}, headers: {}): Promise<Response> {
    console.log("api.post");
    console.log(route);
    console.log(params);
    console.log(headers);
    const response = await fetch(route + queryString(params), {
      method: "DELETE",
      headers: headers,
    });
    console.log(response);
    return response;
  }

  patch(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
