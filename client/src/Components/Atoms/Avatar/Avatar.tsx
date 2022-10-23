import React from "react";
import DefaultProfileImage from "./DefaultAvatar";
import { StyledAvatar } from "./Avatar.styled";

export type AvatarProps = {
  imageSrc?: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  imageSrc = "",
  className = "",
}) => {
  return (
    <StyledAvatar imageSrc={imageSrc} className={className}>
      {!imageSrc && <DefaultProfileImage />}
    </StyledAvatar>
  );
};
