import React from "react";
import { Outlet } from "react-router-dom";
import {
  StyledDashboardLayout,
  SidebarContainer,
  ContentContainer,
} from "./DashboardLayout.styled";
import { SideBar } from "Components";

export const DashboardLayout: React.FC = () => {
  return (
    <StyledDashboardLayout>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </StyledDashboardLayout>
  );
};
