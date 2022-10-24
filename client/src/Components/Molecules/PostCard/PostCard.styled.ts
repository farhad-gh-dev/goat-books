import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { Avatar, CustomIcon, Text } from "Components/Atoms";

export const StyledPostCard = styled.div`
  width: 390px;
  padding: 24px;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  .book-title {
    margin-bottom: 4px;
  }

  .book-quote {
    margin-bottom: 24px;

    ${screenSize.laptop} {
      margin-bottom: 20px;
    }
  }

  .book-review {
    margin-bottom: 16px;

    ${screenSize.laptop} {
      margin-bottom: 20px;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  ${screenSize.laptop} {
    margin-bottom: 16px;
  }
`;

export const AuthorName = styled(Text).attrs({
  size: "sm",
  textTransform: "capitalize",
})`
  color: ${(props) => props.theme.color.secondary};
`;

export const SaveIcon = styled(CustomIcon).attrs({
  type: "ribbon",
  color: "red",
})``;

export const SaveButton = styled.button`
  cursor: pointer;
`;

export const CardBody = styled.div``;

export const ReviewTitle = styled(Text).attrs({ fontWeight: "semi-bold" })`
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.primary};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled(Avatar)`
  &,
  svg {
    width: 36px;
    height: 36px;

    ${screenSize.laptop} {
      width: 42px;
      height: 42px;
    }
  }
`;

export const TextContainer = styled.div`
  margin-left: 8px;

  .post-author {
    margin-bottom: 4px;
  }

  .post-date {
    font-size: ${typography.size.text_10};
    font-weight: ${typography.weight["semi-bold"]};
    opacity: 0.6;

    ${screenSize} {
      font-size: ${typography.size.text_12};
    }
  }
`;

export const PostRating = styled.div`
  display: flex;

  span {
    margin-left: 8px;
  }
`;

export const RatingIconContainer = styled.div<{ lastItem?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 12px;

  ${(props) => props.lastItem && "margin-right: 0;"}
`;
