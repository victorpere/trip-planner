import { useCallback, useState, useMemo } from "react";
import { useAuth } from "react-oidc-context";
import { GenericApi } from "../modules/GenericApi";
import { Trip } from "../models/Trip";
import { TripApi } from "../modules/TripApi";

const useTripApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const tripApi = useMemo(
    () => new TripApi(new GenericApi(process.env.REACT_APP_API_URL!)),
    []
  );

  const getOwnTrips = useCallback(
    async (setTrips: (trips: Trip[]) => void) => {
      setIsLoading(true);

      if (auth.isAuthenticated) {
        const response = await tripApi.getOwnTrips(
          auth.user!.profile.sub!,
          auth.user!.access_token
        );

        setTrips(response.trips);

        if (response.error) {
          setError(response.error);
        }
      }

      setIsLoading(false);
    },
    [auth.isAuthenticated, auth.user, tripApi]
  );

  return {
    isLoading,
    error,
    getOwnTrips,
  };
};

export default useTripApi;
