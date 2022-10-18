import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ResetPasswordForm } from "./ResetPasswordForm";

export default {
  title: "Organisms/reset password Form",
  component: ResetPasswordForm,
} as ComponentMeta<typeof ResetPasswordForm>;

const Template: ComponentStory<typeof ResetPasswordForm> = (args) => (
  <ResetPasswordForm {...args} />
);

export const Default = Template.bind({});
