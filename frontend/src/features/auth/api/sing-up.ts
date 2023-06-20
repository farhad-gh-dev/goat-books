import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";
import { setToken } from "@/utils/storage";

import { SignUpResponse } from "../types";

export type SignUpDTO = {
  data: {
    email: string;
    password: string;
  };
};
export const signUp = ({
  data,
}: SignUpDTO): Promise<{ data: SignUpResponse }> => {
  return axios.post("/auth/sign-up", data);
};

type SignUpOptions = {
  config?: MutationConfig<typeof signUp>;
};

export const useSignUp = ({ config }: SignUpOptions) => {
  return useMutation({
    onSuccess: async (data) => {
      setToken(data.data.access_token);
      queryClient.invalidateQueries(["sign-in-status"]);
    },
    ...config,
    mutationFn: signUp,
  });
};
