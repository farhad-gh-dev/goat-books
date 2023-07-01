import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

import { UpdateUserProfile } from "../types";

export type UpdateUserDTO = {
  data: UpdateUserProfile;
  id: string;
};
export const updateUser = ({ data, id }: UpdateUserDTO): Promise<any> => {
  return axios.put(`/user/${id}`, data);
};

type UpdateUserOptions = {
  config?: MutationConfig<typeof updateUser>;
};

export const useUpdateUserProfile = ({ config }: UpdateUserOptions) => {
  return useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries(["/user/me"]);
    },
    ...config,
    mutationFn: updateUser,
  });
};
