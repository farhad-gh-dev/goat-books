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
  isLiked?: boolean;
  isDisliked?: boolean;
};

export const CardFooter: React.FC<CardFooterProps> = ({
  date,
  numOfLikes,
  numOfDislikes,
  userName,
  isLiked,
  isDisliked,
}) => {
  return (
    <StyledCardFooter>
      <UserProfile>
        <UserAvatar />

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
          <button onClick={() => console.log("test")}>
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
          <button onClick={() => console.log("test")}>
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
