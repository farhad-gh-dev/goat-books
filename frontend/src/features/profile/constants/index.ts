import { DefaultValues } from "react-hook-form";

import { ProfileFromValues } from "../types";

export const profileFormDefaultValues: DefaultValues<ProfileFromValues> = {
  profileImage: "",
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
};
