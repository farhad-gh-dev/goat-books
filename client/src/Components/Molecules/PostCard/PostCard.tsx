import React from "react";
import { StyledPostCard } from "./PostCard.styled";
import { CardHeader } from "./SubComponents/CardHeader";
import { CardBody } from "./SubComponents/CardBody";
import { CardFooter } from "./SubComponents/CardFooter";
import type { UserPost } from "./Types";

type PostCardProps = {
  postData?: UserPost;
  onSave?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
};

export const PostCard: React.FC<PostCardProps> = ({
  postData = {},
  onSave = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  const {
    title = "not mentioned",
    author = "not mentioned",
    quote,
    review,
    date,
    numOfLikes,
    numOfDislikes,
    isSaved,
    userName,
    userAvatar,
    isLiked,
    isDisliked,
  } = postData;

  return (
    <StyledPostCard>
      <CardHeader
        title={title}
        author={author}
        isSaved={isSaved}
        onSave={onSave}
      />

      <CardBody quote={quote} review={review} />

      <CardFooter
        userName={userName}
        date={date}
        isLiked={isLiked}
        isDisliked={isDisliked}
        numOfLikes={numOfLikes}
        numOfDislikes={numOfDislikes}
        userAvatar={userAvatar}
        onLike={onLike}
        onDislike={onDislike}
      />
    </StyledPostCard>
  );
};
