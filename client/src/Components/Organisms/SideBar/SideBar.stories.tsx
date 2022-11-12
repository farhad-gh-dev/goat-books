import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideBar } from "./SideBar";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Default = Template.bind({});
