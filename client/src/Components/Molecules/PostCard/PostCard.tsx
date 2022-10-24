import React from "react";
import { useTheme } from "styled-components";
import {
  StyledPostCard,
  CardHeader,
  AuthorName,
  SaveButton,
  CardBody,
  ReviewTitle,
  CardFooter,
  UserAvatar,
  UserProfile,
  TextContainer,
  PostRating,
  RatingIconContainer,
} from "./PostCard.styled";
import { Heading, CustomIcon, Text } from "Components/Atoms";

type UserPost = {
  title?: string;
  author?: string;
  quote?: string;
  review?: string;
  date?: string;
  numOfLikes?: number;
  numOfDislikes?: number;
};

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
  const theme: any = useTheme();
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
      <CardHeader>
        <div>
          <Heading
            h3
            fontWeight="regular"
            textTransform="capitalize"
            className="book-title"
          >
            {title}
          </Heading>
          <AuthorName>By: {author}</AuthorName>
        </div>

        <SaveButton>
          {isSaved ? (
            <CustomIcon type="ribbon-filled" color={theme.color.primary} />
          ) : (
            <CustomIcon type="ribbon" />
          )}
        </SaveButton>
      </CardHeader>

      <CardBody>
        {quote && (
          <div className="book-quote">
            <Text textAlign="center">
              <i>
                <q>{quote}</q>
              </i>
            </Text>
          </div>
        )}

        {review && (
          <div className="book-review">
            <ReviewTitle fontWeight={"semi-bold"}>
              What I love about this book
            </ReviewTitle>
            <Text>{review}</Text>
          </div>
        )}
      </CardBody>

      <CardFooter>
        <UserProfile>
          <UserAvatar />

          <TextContainer>
            <a href="/">
              <Text
                size="sm"
                textTransform="capitalize"
                className="post-author"
              >
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
      </CardFooter>
    </StyledPostCard>
  );
};
