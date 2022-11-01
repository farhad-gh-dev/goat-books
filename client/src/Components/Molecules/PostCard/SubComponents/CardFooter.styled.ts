import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { Avatar } from "Components/Atoms";

export const StyledCardFooter = styled.div`
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
