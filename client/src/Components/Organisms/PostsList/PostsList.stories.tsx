import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PostsList } from "./PostsList";

export default {
  title: "Organisms/PostsList",
  component: PostsList,
} as ComponentMeta<typeof PostsList>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof PostsList> = (args) => (
  <QueryClientProvider client={queryClient}>
    <PostsList {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
