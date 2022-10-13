import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignInForm } from "./SignInForm";

export default {
  title: "Organisms/Sign-in Form",
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
);

export const Default = Template.bind({});
