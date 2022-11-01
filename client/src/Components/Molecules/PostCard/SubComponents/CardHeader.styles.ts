import styled from "styled-components";
import { screenSize } from "Styles";
import { Text } from "Components/Atoms";

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  ${screenSize.laptop} {
    margin-bottom: 16px;
  }

  .book-title {
    margin-bottom: 4px;
  }
`;

export const AuthorName = styled(Text).attrs({
  size: "sm",
  textTransform: "capitalize",
})`
  color: ${(props) => props.theme.color.secondary};
`;

export const SaveButton = styled.button`
  cursor: pointer;
`;
