import React from "react";
import LogoLight from "Assets/logo-light-64.png";
import LogoDark from "Assets/logo-dark-64.png";
import { StyledBrandLogo, LogoImage, BrandTitle } from "./BrandLogo.styled";

export type BrandLogoProps = {
  isDark?: boolean;
  imageOnly?: boolean;
  className?: string;
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  isDark,
  imageOnly,
  className = "",
}) => {
  return (
    <StyledBrandLogo
      isDark={isDark}
      className={className}
      data-testid="brand-logo"
    >
      <LogoImage
        src={isDark ? LogoLight : LogoDark}
        alt="goat Quotes"
        imageOnly={imageOnly}
      />
      {!imageOnly ? (
        <BrandTitle>
          <span>G</span>oat <span>Q</span>uotes
        </BrandTitle>
      ) : null}
    </StyledBrandLogo>
  );
};
