import React from "react";
import {
  StyledCardFooter,
  UserAvatar,
  UserProfile,
  TextContainer,
  PostRating,
  RatingIconContainer,
} from "./CardFooter.styled";
import { CustomIcon, Text } from "Components/Atoms";

type CardFooterProps = {
  date?: string;
  numOfLikes?: number;
  numOfDislikes?: number;
  userName?: string;
  userAvatar?: string;
  isLiked?: boolean;
  isDisliked?: boolean;
  onLike?: () => void;
  onDislike?: () => void;
};

export const CardFooter: React.FC<CardFooterProps> = ({
  date,
  numOfLikes,
  numOfDislikes,
  userName,
  userAvatar,
  isLiked,
  isDisliked,
  onLike,
  onDislike,
}) => {
  return (
    <StyledCardFooter>
      <UserProfile>
        <UserAvatar imageSrc={userAvatar} />

        <TextContainer>
          <a href="/">
            <Text size="sm" textTransform="capitalize" className="post-author">
              {userName}
            </Text>
          </a>
          <Text textTransform="capitalize" className="post-date">
            {date}
          </Text>
        </TextContainer>
      </UserProfile>

      <PostRating>
        <RatingIconContainer>
          <button onClick={onLike}>
            {isLiked ? (
              <CustomIcon type="like-filled" />
            ) : (
              <CustomIcon type="like" />
            )}
          </button>{" "}
          {numOfLikes ? (
            <Text isSpan size="sm">
              {numOfLikes}
            </Text>
          ) : null}
        </RatingIconContainer>
        <RatingIconContainer lastItem>
          <button onClick={onDislike}>
            {isDisliked ? (
              <CustomIcon type="dislike-filled" />
            ) : (
              <CustomIcon type="dislike" />
            )}
          </button>{" "}
          {numOfDislikes ? (
            <Text isSpan size="sm">
              {numOfDislikes}
            </Text>
          ) : null}
        </RatingIconContainer>
      </PostRating>
    </StyledCardFooter>
  );
};
