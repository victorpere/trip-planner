import { Api } from "./Api";

export class GenericApi implements Api {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(route: string, params: {}, headers: {}): Promise<Response> {
    console.log("api.get");
    console.log(route);
    console.log(params);
    console.log(headers);
    const response = await fetch(this.baseUrl + route, {
      method: "GET",
      headers: headers,
    });
    console.log(response);
    const data = await response.json();
    return data;
  }
  post(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  put(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  delete(route: string, params: {}, headers: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  patch(route: string, params: {}, headers: {}, body: {}): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
