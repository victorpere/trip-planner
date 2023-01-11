export interface Api {
  get(route: string, params: {}, headers: {}): Promise<Response>;

  post(route: string, params: {}, headers: {}, body: {}): Promise<Response>;

  put(route: string, params: {}, headers: {}, body: {}): Promise<Response>;

  delete(route: string, params: {}, headers: {}): Promise<Response>;

  patch(route: string, params: {}, headers: {}, body: {}): Promise<Response>;
}
