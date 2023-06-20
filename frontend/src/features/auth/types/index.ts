import z from "zod";

import { signInFormSchema, signUpFormSchema } from "../entities";

export type SignInFormValues = z.infer<typeof signInFormSchema>;
export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export type SignInResponse = {
  access_token: string;
};

export type SignUpResponse = {
  access_token: string;
};
