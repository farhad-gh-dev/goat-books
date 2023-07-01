import { useMutation } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { MutationConfig, queryClient } from "@/libs/react-query";

export const bookmarkPost = ({ postId }: { postId: string }) => {
  return axios.post(`/bookmark/${postId}`);
};

type BookmarkPostOptions = {
  config?: MutationConfig<typeof bookmarkPost>;
};

export const useBookmarkPost = ({ config }: BookmarkPostOptions) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["/post/posts"]);
    },
    ...config,
    mutationFn: bookmarkPost,
  });
};
