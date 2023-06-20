import { DefaultValues } from "react-hook-form";

import type { SignInFormValues, SignUpFormValues } from "../types";

export const signInFormDefaultValues: DefaultValues<SignInFormValues> = {
  email: "",
  password: "",
};

export const signUpFormDefaultValues: DefaultValues<SignUpFormValues> = {
  email: "",
  username: "",
  password: "",
};
