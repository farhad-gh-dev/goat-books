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

type SidebarItem = {
  title: string;
  link: string;
  isActive?: boolean;
};

const sidebarLinks: SidebarItem[] = [
  { title: "trending", link: "/app", isActive: true },
  { title: "your posts", link: "/posts" },
  { title: "liked posts", link: "/likes" },
  { title: "saved posts", link: "/saves" },
  { title: "account settings", link: "/settings" },
];
export const SideBar: React.FC = () => {
  const [isOpenInMobileSize, setIsOpenInMobileSize] = useState(false);
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
          {sidebarLinks.map((item) => (
            <ListItem isActive={item.isActive}>
              <ActiveIndicator />
              <ItemLink href={item.link}>
                <LinkText isSpan textTransform="capitalize">
                  {item.title}
                </LinkText>
              </ItemLink>
            </ListItem>
          ))}
        </LinksList>
      </ContentContainer>
    </StyledSideBar>
  );
};
