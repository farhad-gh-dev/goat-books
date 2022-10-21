import React from "react";
import { StyledCustomIcon } from "./CustomIcon.styled";
import LikeIcon from "./Svgs/Like";

export type IconTypes = "like" | "bell";

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
    case "bell":
      return <LikeIcon />;
    default:
      return null;
  }
};
