import React from "react";
import { useTheme } from "styled-components";
import { StyledCardHeader, AuthorName, SaveButton } from "./CardHeader.styles";
import { Heading, CustomIcon } from "Components/Atoms";

type CardHeaderProps = {
  title?: string;
  author?: string;
  isSaved?: boolean;
  onSave?: () => void;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  author,
  isSaved,
  onSave,
}) => {
  const theme: any = useTheme();

  return (
    <StyledCardHeader>
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

      <SaveButton onClick={onSave}>
        {isSaved ? (
          <CustomIcon type="ribbon-filled" color={theme.color.primary} />
        ) : (
          <CustomIcon type="ribbon" />
        )}
      </SaveButton>
    </StyledCardHeader>
  );
};
