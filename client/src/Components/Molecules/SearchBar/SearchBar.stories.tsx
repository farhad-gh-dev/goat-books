import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchBar } from "./SearchBar";

export default {
  title: "Molecules/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
