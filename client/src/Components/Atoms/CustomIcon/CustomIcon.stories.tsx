import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CustomIcon } from "./CustomIcon";

export default {
  title: "Atoms/CustomIcon",
  component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => (
  <CustomIcon {...args} />
);

export const All = () => {
  return (
    <div>
      <Template type="like" />
      <Template type="like" strokeColor="red" color="red" />
    </div>
  );
};

export const Single = Template.bind({});
Single.args = {
  type: "like",
};
