import React from "react";
import { useTheme } from "styled-components";
import {
  StyledSideBar,
  ContentContainer,
  LinksList,
  ListItem,
  ActiveIndicator,
  ItemLink,
  LinkText,
} from "./SideBar.styled";
import { BrandLogo } from "Components/Atoms";

const isActive = true;

export const SideBar: React.FC = () => {
  const theme: any = useTheme();

  return (
    <StyledSideBar>
      <ContentContainer>
        <BrandLogo className="brand-logo" isDark={theme.name === "dark"} />

        <LinksList>
          <ListItem isActive={isActive}>
            <ActiveIndicator />
            <ItemLink href="/">
              <LinkText isSpan textTransform="capitalize">
                trending
              </LinkText>
            </ItemLink>
          </ListItem>

          <ListItem>
            <ActiveIndicator />
            <ItemLink href="/">
              <LinkText isSpan textTransform="capitalize">
                your posts
              </LinkText>
            </ItemLink>
          </ListItem>
        </LinksList>
      </ContentContainer>
    </StyledSideBar>
  );
};
