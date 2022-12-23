import { Api } from "./Api";

export class GenericApi implements Api {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(route: string, params: {}, headers: {}): Promise<Response> {
    throw new Error("Method not implemented.");
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
