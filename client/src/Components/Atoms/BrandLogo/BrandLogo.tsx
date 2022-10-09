import React from "react";
import LogoLight from "Assets/logo-light-64.png";
import LogoDark from "Assets/logo-dark-64.png";
import { StyledBrandLogo, LogoImage, BrandTitle } from "./BrandLogo.styled";

export type BrandLogoProps = {
  isDark?: boolean;
  imageOnly?: boolean;
  className?: string;
};

const BrandLogo: React.FC<BrandLogoProps> = (props) => {
  const { isDark, imageOnly, className = "" } = props;

  return (
    <StyledBrandLogo
      isDark={isDark}
      className={className}
      data-testid="brand-logo"
    >
      <LogoImage
        src={isDark ? LogoLight : LogoDark}
        alt="goat books"
        imageOnly={imageOnly}
      />
      {!imageOnly ? (
        <BrandTitle>
          <span>G</span>oat <span>B</span>ooks
        </BrandTitle>
      ) : null}
    </StyledBrandLogo>
  );
};

export default BrandLogo;
