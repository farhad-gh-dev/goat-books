import z from "zod";

export const newPostSchema = z.object({
  title: z.string().min(1).max(50),
  quote: z.string().min(1).max(420),
  author: z.string().min(1).max(30),
  review: z.string().max(320).optional(),
});
