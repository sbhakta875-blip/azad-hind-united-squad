import { k as useInternetIdentity } from "./index-Di1Y5MzV.js";
import { a as useActor, u as useQuery, b as createActor } from "./backend-CA2XpFJp.js";
function useAuth() {
  const {
    identity,
    login,
    clear,
    isAuthenticated,
    isLoggingIn,
    isInitializing
  } = useInternetIdentity();
  const { actor } = useActor(createActor);
  const { data: isAdmin = false, isLoading: isCheckingAdmin } = useQuery({
    queryKey: ["isAdmin", identity == null ? void 0 : identity.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor || !isAuthenticated) return false;
      try {
        return await actor.isCallerAdmin();
      } catch {
        return false;
      }
    },
    enabled: !!actor && isAuthenticated,
    staleTime: 3e4
  });
  return {
    identity,
    isAuthenticated,
    isAdmin,
    isCheckingAdmin,
    isLoggingIn,
    isInitializing,
    login,
    logout: clear
  };
}
export {
  useAuth as u
};
