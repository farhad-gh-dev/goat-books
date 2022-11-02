import { dummyData } from "./dummyData";
import type { UserPost } from "Components/Molecules/PostCard/Types";

export const getPosts = (): Promise<UserPost[]> => Promise.resolve(dummyData);

export const savePost = (newPost: UserPost): Promise<{ message: string }> =>
  Promise.resolve({ message: "new post was created successfully" });
