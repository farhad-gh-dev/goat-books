import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavProfile } from "./NavProfile";

export default {
  title: "Molecules/NavProfile",
  component: NavProfile,
} as ComponentMeta<typeof NavProfile>;

const Template: ComponentStory<typeof NavProfile> = (args) => (
  <NavProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userName: "ken kaneki",
  numberOfPosts: 55,
  profileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCeT_DMToPHozSj9_1xfrpMW7Xkpqhm2fCw&usqp=CAU",
};

export const Empty = Template.bind({});
