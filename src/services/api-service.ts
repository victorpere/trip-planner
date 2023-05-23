import { IApiService } from "./interfaces/api-service.interface";
import { queryString } from "./utilities";


export class ApiService implements IApiService {
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

  async put(
    route: string,
    params: {},
    headers: {},
    body: {}
  ): Promise<Response> {
    console.log("api.put");
    console.log(route);
    console.log(params);
    console.log(headers);
    console.log(body);
    const response = await fetch(route + queryString(params), {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log(response);
    return response;
  }

  async delete(route: string, params: {}, headers: {}): Promise<Response> {
    console.log("api.delete");
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

  async patch(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    console.log("api.patch");
    console.log(route);
    console.log(params);
    console.log(headers);
    console.log(body);
    const response = await fetch(route + queryString(params), {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log(response);
    return response;
  }
}
