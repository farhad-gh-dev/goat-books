import z from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const signUpFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(1).max(15),
  password: z.string().min(8).max(20),
});
