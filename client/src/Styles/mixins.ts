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

export const hexToRgb = (hex?: string, opacity?: number): string => {
  if (!hex) return "";

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return "";

  if (opacity) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)}, ${opacity})`;
  }

  return `rgb(${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16
  )}, ${parseInt(result[3], 16)})`;
};
