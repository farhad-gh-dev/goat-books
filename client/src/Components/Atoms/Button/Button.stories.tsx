import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  children: "Action",
  variant: "primary",
};

export const NotActive = Template.bind({});
NotActive.args = {
  children: "Action",
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: "Click Me",
  onClick: () => alert("Clicked"),
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "bingo",
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  children: "Long Label",
  style: { width: "100px" },
};
