import styled from "styled-components";
import { screenSize } from "Styles";

export const StyledNavProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  text-align: right;
  margin-right: 10px;

  ${screenSize.laptop} {
    margin-right: 12px;
  }

  .number-of-posts {
    margin-top: 2px;
    opacity: 0.65;

    ${screenSize.laptop} {
      margin-top: 5px;
    }
  }
`;
