import styled from "styled-components";
import { screenSize } from "Styles";
import { Text } from "Components/Atoms";

export const StyledCardBody = styled.div`
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

export const ReviewTitle = styled(Text).attrs({ fontWeight: "semi-bold" })`
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.primary};
`;
