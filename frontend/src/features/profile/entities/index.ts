import z from "zod";

export const profileFormSchema = z.object({
  profileImage: z.string(),
});
