import z from "zod";

export const profileFormSchema = z
  .object({
    profileImage: z.string(),
    email: z.string(),
    username: z.string().min(1).max(30),
    password: z
      .string()
      .refine(
        (value) => value === "" || value.length > 8,
        "Password should be at least 8 characters"
      ),
    repeatPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });
