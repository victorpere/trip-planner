export const authHeader = (token: string) => {
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return null;
};

export const queryString = (params: {}) => {
  if (!params || Object.entries(params).length === 0) {
    return "";
  }

  let queryString = "?";
  Object.entries(params).forEach(([key, value]) => {
    queryString += `${key}=${encodeURIComponent(value as string)}&`;
  });

  queryString = queryString.slice(0, -1);
  return queryString;
};
