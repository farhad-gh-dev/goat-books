import { DefaultValues } from "react-hook-form";

import { NewPost } from "../types";

export const newPostFormDefaultValues: DefaultValues<NewPost> = {
  title: "",
  author: "",
  quote: "",
  review: "",
};
