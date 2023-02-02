import { useState, useCallback } from "react";

import { useInjection } from "brandi-react";
import { useAuth } from "react-oidc-context";

import { TOKENS } from "../config/tokens";
import { Item } from "../models/Item";

export const useTripItemService = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const tripItemService = useInjection(TOKENS.tripItemService);
  const auth = useAuth();

  const createItem = useCallback(
    async (
      tripId: string,
      parentItemType: string,
      parentItemId: string,
      itemType: string,
      item: Item,
      setItemId: (itemId?: string) => void
    ) => {
      if (auth.isAuthenticated && auth.user) {
        const response = await tripItemService.createItem(
          tripId,
          parentItemType,
          parentItemId,
          itemType,
          item,
          auth.user.access_token
        );

        if (response.error) {
          setError(response.error);
        } else {
          setItemId(response.itemId);
        }
      }
    },
    [tripItemService, auth.isAuthenticated, auth.user]
  );

  return {
    error,
    createItem,
  };
};
