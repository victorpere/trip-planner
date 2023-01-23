import { useCallback, useState, useMemo } from "react";

import { useAuth } from "react-oidc-context";
import { useInjection } from "brandi-react";

import { TOKENS } from "../config/tokens";
import Trip from "../models/Trip";
import TripApi from "../modules/TripApi";

const useTripApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const apiService = useInjection(TOKENS.api);
  const tripApi = useMemo(() => new TripApi(apiService), [apiService]);

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

  const createTrip = useCallback(
    async (trip: Trip, setTripId: (tripId?: string) => void) => {
      setIsLoading(true);

      if (auth.isAuthenticated) {
        const response = await tripApi.createNewTrip(
          trip,
          auth.user!.access_token
        );
        setTripId(response.tripId);

        if (response.error) {
          setError(response.error);
        }
      }

      setIsLoading(false);
    },
    [auth.isAuthenticated, auth.user, tripApi]
  );

  const deleteTrip = useCallback(
    async (tripId: string) => {
      setIsLoading(true);
      if (auth.isAuthenticated) {
        const response = await tripApi.deleteTrip(
          tripId,
          auth.user!.access_token
        );

        if (response.error) {
          setError(response.error);
        }
      }
      setIsLoading(false);
    },
    [auth.isAuthenticated, auth.user, tripApi]
  );

  return {
    /**
     * Indicates whether an operation is in process
     */
    isLoading,
    /**
     * Error message, if an error has occurred
     */
    error,
    /**
     * Returns trips of the specified owner
     */
    getOwnTrips,
    /**
     * Returns the specified trip
     */
    getTripDetails,
    /**
     * Creates a new trip
     */
    createTrip,
    /**
     * Deletes a trip
     */
    deleteTrip,
  };
};

export default useTripApi;
