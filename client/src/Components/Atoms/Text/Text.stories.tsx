import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const defaultText = "This is a sample paragraph";

export const SimpleText = Template.bind({});
SimpleText.args = {
  children: defaultText,
};

export const Inline = Template.bind({});
Inline.args = {
  children: defaultText,
  isInline: true,
};

export const AsSpan = Template.bind({});
AsSpan.args = {
  children: defaultText,
  isSpan: true,
};

export const DifferentOpacity = Template.bind({});
DifferentOpacity.args = {
  children: defaultText,
};

export const Sizes = () => (
  <div>
    <Text size="md">Medium: {defaultText}</Text>
    <Text size="lg">Large: {defaultText}</Text>
  </div>
);

export const FontWeights = () => (
  <div>
    <Text fontWeight="light">
      {defaultText} ---{">"} light
    </Text>
    <Text fontWeight="regular">
      {defaultText} ---{">"} regular
    </Text>
    <Text fontWeight="medium">
      {defaultText} ---{">"} medium
    </Text>
    <Text fontWeight="semi-bold">
      {defaultText} ---{">"} semi-bold
    </Text>
    <Text fontWeight="bold">
      {defaultText} ---{">"} bold
    </Text>
  </div>
);

export const Transform = () => (
  <div>
    <Text textTransform="lowercase">Lowercase: {defaultText}</Text>
    <Text textTransform="capitalize">Capitalized: {defaultText}</Text>
    <Text textTransform="uppercase">Uppercase: {defaultText}</Text>
  </div>
);

export const OverflowEllipsis = Template.bind({});
OverflowEllipsis.args = {
  children: "This text is so long it's overflowing",
  style: { width: "230px" },
  overflowEllipsis: true,
};
