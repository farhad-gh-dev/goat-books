import { useQuery } from "@tanstack/react-query";

import { getToken } from "@/utils/storage";

const checkLocalToken = () => getToken();

export const useSignInStatus = () => {
  return useQuery({
    queryKey: ["sign-in-status"],
    queryFn: () => checkLocalToken(),
  });
};
