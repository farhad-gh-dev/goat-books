import { typography } from "./index";

/*Use font weight types*/
export const selectFontWeight = (fontWeight?: string) => {
  if (!fontWeight) return "font-weight: 500";

  return fontWeight === "light" ||
    "regular" ||
    "medium" ||
    "semi_bold" ||
    "bold"
    ? `font-weight: ${
        typography.weight[fontWeight as keyof typeof typography.weight]
      }`
    : `font-weight: ${fontWeight}`;
};
