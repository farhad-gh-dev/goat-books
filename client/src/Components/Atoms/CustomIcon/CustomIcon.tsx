import React from "react";
import { StyledCustomIcon } from "./CustomIcon.styled";
import {
  Like as LikeIcon,
  LikeFilled as LikeFilledIcon,
  Dislike as DislikeIcon,
  DislikeFilled as DislikeFilledIcon,
  Ribbon as RibbonIcon,
  RibbonFilled as RibbonFilledIcon,
  Search as SearchIcon,
} from "./Svgs";

export type IconTypes =
  | "like"
  | "like-filled"
  | "dislike"
  | "dislike-filled"
  | "ribbon"
  | "ribbon-filled"
  | "search";

export type CustomIconProps = {
  type?: IconTypes;
  /**
   * Also accepts "primary" as value
   */
  color?: string;
  /**
   * Also accepts "primary" as value
   */
  strokeColor?: string;
  className?: string;
};

export const CustomIcon: React.FC<CustomIconProps> = ({
  type,
  className,
  ...props
}) => {
  return (
    <StyledCustomIcon className={className} {...props}>
      <TargetIcon type={type} />
    </StyledCustomIcon>
  );
};

const TargetIcon: React.FC<{ type?: IconTypes }> = ({ type = "" }) => {
  switch (type) {
    case "like":
      return <LikeIcon />;
    case "like-filled":
      return <LikeFilledIcon />;
    case "dislike":
      return <DislikeIcon />;
    case "dislike-filled":
      return <DislikeFilledIcon />;
    case "ribbon":
      return <RibbonIcon />;
    case "ribbon-filled":
      return <RibbonFilledIcon />;
    case "search":
      return <SearchIcon />;
    default:
      return null;
  }
};
