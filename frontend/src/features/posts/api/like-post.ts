import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

export const likePost = ({ postId }: { postId: string }) => {
  return axios.post(`/post/like/${postId}`);
};

type LikePostOptions = {
  config?: MutationConfig<typeof likePost>;
};

export const useLikePost = ({ config }: LikePostOptions) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["/post/posts"]);
    },
    ...config,
    mutationFn: likePost,
  });
};
