import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";

export function useAuth() {
  const {
    identity,
    login,
    clear,
    isAuthenticated,
    isLoggingIn,
    isInitializing,
  } = useInternetIdentity();
  const { actor } = useActor(createActor);

  const { data: isAdmin = false, isLoading: isCheckingAdmin } = useQuery({
    queryKey: ["isAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor || !isAuthenticated) return false;
      try {
        return await actor.isCallerAdmin();
      } catch {
        return false;
      }
    },
    enabled: !!actor && isAuthenticated,
    staleTime: 30_000,
  });

  return {
    identity,
    isAuthenticated,
    isAdmin,
    isCheckingAdmin,
    isLoggingIn,
    isInitializing,
    login,
    logout: clear,
  };
}
