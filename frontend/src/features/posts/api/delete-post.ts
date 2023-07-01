import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

export const deletePost = ({ postId }: { postId: string }) => {
  return axios.delete(`/post/${postId}`);
};

type DeletePostOptions = {
  config?: MutationConfig<typeof deletePost>;
};

export const useDeletePost = ({ config }: DeletePostOptions) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["/post/posts"]);
    },
    ...config,
    mutationFn: deletePost,
  });
};
