import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <TextInput
      {...args}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  label: "username",
  name: "username",
};
