import { useQuery } from "@tanstack/react-query";

import axios from "@/libs/axios";
import { ExtractFnReturnType, QueryConfig } from "@/libs/react-query";

import { Post } from "../types";

interface PostsQueryParams {
  sort?: string;
  searchTerm?: string;
  queries?: string | null;
}

export const getPosts = (params?: PostsQueryParams): Promise<Post[]> => {
  return axios
    .get(`/post/posts`, {
      params: {
        ...params,
      },
    })
    .then((res) => res.data);
};

type QueryFnType = typeof getPosts;

type UsePostsOptions = {
  params?: PostsQueryParams;
  config?: QueryConfig<QueryFnType>;
};

export const usePosts = ({ params, config }: UsePostsOptions) => {
  const serializedParams = JSON.stringify(params);

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["/post/posts", serializedParams],
    queryFn: () => getPosts(params),
    ...config,
  });
};
