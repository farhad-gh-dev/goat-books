import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

import { NewPost } from "../types";

export type NewPostDTO = {
  data: NewPost;
};
export const createPost = ({ data }: NewPostDTO): Promise<any> => {
  return axios.post("/post", data);
};

type CreatePostOptions = {
  config?: MutationConfig<typeof createPost>;
};

export const useCreatePost = ({ config }: CreatePostOptions) => {
  return useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries(["/post/posts"]);
    },
    ...config,
    mutationFn: createPost,
  });
};
