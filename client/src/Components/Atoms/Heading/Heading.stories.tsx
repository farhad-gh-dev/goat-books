import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
const defaultText = "This is a sample text";

export const SampleHeading = Template.bind({});
SampleHeading.args = {
  children: defaultText,
};

export const Types = () => (
  <div>
    <Heading h1>
      {defaultText} ---{">"} h1
    </Heading>
    <Heading h2>
      {defaultText} ---{">"} h2
    </Heading>
    <Heading h3>
      {defaultText} ---{">"} h3
    </Heading>
  </div>
);

export const FontWeights = () => (
  <div>
    <Heading fontWeight="light">
      {defaultText} ---{">"} lighter
    </Heading>
    <Heading fontWeight="regular">
      {defaultText} ---{">"} normal
    </Heading>
    <Heading fontWeight="bold">
      {defaultText} ---{">"} bold
    </Heading>
  </div>
);

export const Transform = () => (
  <div>
    <Heading textTransform="lowercase">
      {defaultText} ---{">"} lowercase
    </Heading>
    <Heading textTransform="capitalize">
      {defaultText} ---{">"} capitalized
    </Heading>
    <Heading textTransform="uppercase">
      {defaultText} ---{">"} uppercase
    </Heading>
  </div>
);
