import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

export const dislikePost = ({ postId }: { postId: string }) => {
  return axios.post(`/post/dislike/${postId}`);
};

type LikePostOptions = {
  config?: MutationConfig<typeof dislikePost>;
};

export const useDislikePost = ({ config }: LikePostOptions) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["/post/posts"]);
    },
    ...config,
    mutationFn: dislikePost,
  });
};
