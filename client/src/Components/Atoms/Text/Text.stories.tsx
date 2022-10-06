import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: "This is a sample Text",
};
