import { Text } from "Components/Atoms";
import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { hexToRgb } from "Styles/mixins";

export const StyledSideBar = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => hexToRgb(props.theme.color.contrast, 0.2)};

  ${screenSize.laptop} {
    overflow: hidden;
    border: 1px solid ${(props) => hexToRgb(props.theme.color.contrast, 0.01)};
    border-radius: 20px;
    box-shadow: 0px 0px 16px
      ${(props) => hexToRgb(props.theme.color.contrast, 0.15)};
    z-index: 1000;
  }
`;

export const ContentContainer = styled.div<{ isOpen?: boolean }>`
  position: relative;
  max-width: 300px;
  height: 100%;
  padding: 21px;
  background-color: white;
  transition: 0.3s ease-in-out;

  ${screenSize.laptop} {
    max-width: unset;
    padding: 30px;
    transform: translateX(0);
  }

  ${(props) =>
    !props.isOpen &&
    `
    transform: translateX(-100%);
  `};

  .brand-logo {
    margin-bottom: 32px;

    ${screenSize.laptop} {
      margin-bottom: 40px;
    }
  }
`;

export const MenuToggler = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 21px;
  right: 21px;
  transition: 0.3s ease-in-out;

  ${screenSize.laptop} {
    display: none;
  }

  ${(props) =>
    !props.isOpen &&
    `
    transform: translateX(62px)
  `};

  .menu-icon {
    svg {
      width: 20px;
      height: auto;
    }
  }
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 20px;
  list-style-type: none;

  ${screenSize.laptop} {
    padding-left: 30px;
  }
`;

export const ActiveIndicator = styled.div`
  display: none;
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
  background-color: ${(props) => hexToRgb(props.theme.color.primary, 0.35)};

  ${screenSize.laptop} {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.primary};
    opacity: 0.5;

    ${screenSize.laptop} {
      width: 13px;
      height: 13px;
    }
  }

  &::after {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color.primary};

    ${screenSize.laptop} {
      width: 5px;
      height: 5px;
    }
  }
`;

export const ItemLink = styled.a`
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const LinkText = styled(Text)`
  font-size: ${typography.size.text_16};

  ${screenSize.laptop} {
    font-size: ${typography.size.text_20};
  }
`;

export const ListItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  ${screenSize.laptop} {
    margin-bottom: 32px;
  }

  ${ActiveIndicator} {
    ${(props) =>
      props.isActive &&
      `
        display: unset;
    `}
  }

  ${LinkText} {
    ${(props) =>
      props.isActive &&
      `
        font-weight: ${typography.weight.medium};

        ${screenSize.laptop}{
            font-weight: ${typography.weight["semi-bold"]}
        }
    `}
  }
`;
