import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  StyledSideBar,
  ContentContainer,
  MenuToggler,
  LinksList,
  ListItem,
  ActiveIndicator,
  ItemLink,
  LinkText,
} from "./SideBar.styled";
import { BrandLogo, CustomIcon } from "Components/Atoms";

const isActive = true;

export const SideBar: React.FC = () => {
  const [isOpenInMobileSize, setIsOpenInMobileSize] = useState(true);
  const theme: any = useTheme();

  return (
    <StyledSideBar>
      <ContentContainer isOpen={isOpenInMobileSize}>
        <MenuToggler
          onClick={() => setIsOpenInMobileSize(!isOpenInMobileSize)}
          isOpen={isOpenInMobileSize}
        >
          {isOpenInMobileSize ? (
            <CustomIcon type="close" className="menu-icon" />
          ) : (
            <CustomIcon type="burger-menu" className="menu-icon" />
          )}
        </MenuToggler>

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
