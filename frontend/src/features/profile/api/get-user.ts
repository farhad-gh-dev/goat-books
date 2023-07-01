import { useQuery } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { ExtractFnReturnType, QueryConfig } from "@/libs/react-query";

import { UserProfile } from "../types";

interface UserProfileQueryParams {
  queries?: string | null;
}

export const getUserProfile = (
  params?: UserProfileQueryParams
): Promise<UserProfile> => {
  return axios.get(`/user/me`, { params }).then((res) => res.data);
};

type QueryFnType = typeof getUserProfile;

type UseUserProfileOptions = {
  params?: UserProfileQueryParams;
  config?: QueryConfig<QueryFnType>;
};

export const useUserProfile = ({ params, config }: UseUserProfileOptions) => {
  const serializedParams = JSON.stringify(params);

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["/user/me", serializedParams],
    queryFn: () => getUserProfile(params),
    ...config,
  });
};
