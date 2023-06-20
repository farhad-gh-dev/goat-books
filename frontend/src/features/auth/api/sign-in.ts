import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";
import { setToken } from "@/utils/storage";

import { SignInResponse } from "../types";

export type SignInDTO = {
  data: {
    email: string;
    password: string;
  };
};
export const signIn = ({
  data,
}: SignInDTO): Promise<{ data: SignInResponse }> => {
  return axios.post("/auth/sign-in", data);
};

type SignInOptions = {
  config?: MutationConfig<typeof signIn>;
};

export const useSignIn = ({ config }: SignInOptions) => {
  return useMutation({
    onSuccess: async (data) => {
      setToken(data.data.access_token);
      queryClient.invalidateQueries(["sign-in-status"]);
    },
    ...config,
    mutationFn: signIn,
  });
};
