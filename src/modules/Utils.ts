export const authHeader = (token: string) => {
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return null;
  };