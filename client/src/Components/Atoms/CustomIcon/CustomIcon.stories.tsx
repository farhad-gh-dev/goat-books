import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CustomIcon } from "./CustomIcon";

export default {
  title: "Atoms/CustomIcon",
  component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => (
  <CustomIcon {...args} />
);

const WhiteSpace = () => (
  <div style={{ display: "inline-block", padding: "5px" }}></div>
);

export const All = () => {
  return (
    <div>
      <Template type="like" />
      <WhiteSpace />
      <Template type="like-filled" />
      <WhiteSpace />
      <Template type="dislike" />
      <WhiteSpace />
      <Template type="dislike-filled" />
      <WhiteSpace />
      <Template type="ribbon" />
      <WhiteSpace />
      <Template type="ribbon-filled" color="red" />
      <WhiteSpace />
      <Template type="search" />
      <WhiteSpace />
      <Template type="arrow" />
      <WhiteSpace />
      <Template type="close" />
      <WhiteSpace />
      <Template type="burger-menu" />
    </div>
  );
};

export const Single = Template.bind({});
Single.args = {
  type: "like",
};
