import styled from "styled-components";
import { pageContentSize, screenSize } from "Styles";

export const StyledDashboardLayout = styled.div`
  position: relative;
  display: flex;
  max-width: calc(${pageContentSize.largeScreen}px + 60px);
  margin: auto;
  padding: 0;

  gap: 0;

  ${screenSize.laptop} {
    gap: 60px;
    padding: 0 30px;
  }
`;

export const SidebarContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  z-index: 1000;

  ${screenSize.laptop} {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    width: 420px;
    padding: 30px 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 30px 21px;

  ${screenSize.laptop} {
    padding: 30px 0;
  }
`;
