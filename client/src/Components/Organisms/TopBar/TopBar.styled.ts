import styled from "styled-components";
import { screenSize } from "Styles";

export const StyledTopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${screenSize.laptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .search-bar {
    order: 2;

    ${screenSize.laptop} {
      order: 1;
    }
  }

  .nav-profile {
    order: 1;
    margin-bottom: 16px;

    ${screenSize.laptop} {
      order: 2;
      margin-bottom: 0;
    }
  }
`;
