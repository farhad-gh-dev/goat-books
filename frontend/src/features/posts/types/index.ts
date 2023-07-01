import z from "zod";

import { UserProfile } from "@/features/profile";

import { newPostSchema } from "../entities";

export type NewPost = z.infer<typeof newPostSchema>;

export interface Post {
  id: string;
  title: string;
  quote: string;
  review?: string;
  author: string;
  createdAt: Date;
  user: UserProfile;
  isLiked: boolean;
  isDisliked: boolean;
  isBookmarked: boolean;
  isPostOwner: boolean;
  reactions: {
    likes: number;
    dislikes: number;
  };
}
