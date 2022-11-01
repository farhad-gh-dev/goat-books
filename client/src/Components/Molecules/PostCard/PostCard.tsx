import React from "react";
import { StyledPostCard } from "./PostCard.styled";
import type { UserPost } from "./types";
import { CardHeader } from "./SubComponents/CardHeader";
import { CardBody } from "./SubComponents/CardBody";
import { CardFooter } from "./SubComponents/CardFooter";

type PostCardProps = {
  postData?: UserPost;
  isSaved?: boolean;
  userName?: string;
  isLiked?: boolean;
  isDisliked?: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({
  postData = {},
  isSaved,
  userName,
  isLiked,
  isDisliked,
}) => {
  const {
    title = "not mentioned",
    author = "not mentioned",
    quote,
    review,
    date,
    numOfLikes,
    numOfDislikes,
  } = postData;

  return (
    <StyledPostCard>
      <CardHeader title={title} author={author} isSaved={isSaved} />

      <CardBody quote={quote} review={review} />

      <CardFooter
        userName={userName}
        date={date}
        isLiked={isLiked}
        isDisliked={isDisliked}
        numOfLikes={numOfLikes}
        numOfDislikes={numOfDislikes}
      />
    </StyledPostCard>
  );
};
