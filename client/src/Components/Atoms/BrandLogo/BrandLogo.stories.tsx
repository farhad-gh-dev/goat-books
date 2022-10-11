import { ComponentStory, ComponentMeta } from "@storybook/react";

import BrandLogo from "./BrandLogo";

export default {
  title: "Atoms/Brand Logo",
  component: BrandLogo,
} as ComponentMeta<typeof BrandLogo>;

// Add background for visibility
const Template: ComponentStory<typeof BrandLogo> = (args) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: args.isDark ? "black" : "white",
        padding: "20px",
      }}
    >
      <BrandLogo {...args} />
    </div>
  );
};

export const Standard = Template.bind({});

export const ImageOnly = Template.bind({});
ImageOnly.args = {
  imageOnly: true,
};

export const Dark = Template.bind({});
Dark.args = {
  isDark: true,
};
