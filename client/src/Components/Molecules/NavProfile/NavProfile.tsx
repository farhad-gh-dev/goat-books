import { Avatar, Text } from "Components/Atoms";
import React from "react";
import { StyledNavProfile, TextContainer } from "./NavProfile.styled";

type Props = {
  userName?: string;
  numberOfPosts?: number;
  profileImage?: string;
};

export const NavProfile: React.FC<Props> = ({
  userName = "",
  numberOfPosts = 0,
  profileImage = "",
}) => {
  return (
    <StyledNavProfile>
      <TextContainer>
        <Text fontWeight="medium" textTransform="capitalize">
          {userName}
        </Text>

        {numberOfPosts !== 0 && (
          <Text
            size="xs"
            fontWeight="medium"
            textTransform="capitalize"
            className="number-of-posts"
          >
            {numberOfPosts} posts
          </Text>
        )}
      </TextContainer>
      <Avatar imageSrc={profileImage} />
    </StyledNavProfile>
  );
};
