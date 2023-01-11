import { useCallback, useState, useMemo } from "react";
import { useAuth } from "react-oidc-context";
import { TOKENS } from "../di-container/tokens";
import { container } from "../di-container/container";
import { Trip } from "../models/Trip";
import { TripApi } from "../modules/TripApi";

const useTripApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const tripApi = useMemo(() => new TripApi(container.get(TOKENS.api)), []);

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

  const getTripDetails = useCallback(
    async (tripId: string, setTrip: (trip?: Trip) => void) => {
      setIsLoading(true);

      const response = await tripApi.getTripDetails(
        tripId,
        auth.user?.access_token
      );

      setTrip(response.trip);

      if (response.error) {
        setError(response.error);
      }

      setIsLoading(false);
    },
    [auth.user, tripApi]
  );

  return {
    isLoading,
    error,
    getOwnTrips,
    getTripDetails,
  };
};

export default useTripApi;
