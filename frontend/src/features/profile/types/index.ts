import z from "zod";

import { profileFormSchema } from "../entities";

export type ProfileFromValues = z.infer<typeof profileFormSchema>;

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  bio?: string;
  profileImage?: string;
  createdAt: Date;
};
