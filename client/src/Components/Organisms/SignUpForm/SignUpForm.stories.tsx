import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignUpForm } from "./SignUpForm";

export default {
  title: "Organisms/Sign-up Form",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);

export const Default = Template.bind({});
