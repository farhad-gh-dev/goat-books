import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { PostCard } from "./PostCard";

export default {
  title: "Molecules/PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Container = styled.div`
  max-width: 390px;
`;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <Container>
    <PostCard {...args} />
  </Container>
);

const dummyPostData = {
  title: "Art of thinking clearly",
  author: "Rolf Dobelli",
  quote: `How do you curb envy? First, stop comparing yourself to others. Second, find your “circle of competence” and fill it on your own. Create a niche where you are the best. It doesn’t matter how small your area of mastery is. The main thing is that you are king of the castle.`,
  review: `A world-class thinker counts the 100 ways in which humans behave irrationally, showing us what we can do to recognize and minimize these “thinking errors” to make better decisions and have a better`,
  date: "10/23/2022",
  numOfLikes: 24,
  numOfDislikes: 24,
  isSaved: true,
  userName: "harry potter",
};

export const Default = Template.bind({});
Default.args = {
  postData: dummyPostData,
};

export const Empty = Template.bind({});

export const QuoteOnly = Template.bind({});
QuoteOnly.args = {
  postData: {
    ...dummyPostData,
    review: "",
    numOfDislikes: 0,
    numOfLikes: 10,
    userName: "harry potter",
    isLiked: true,
  },
};

export const ReviewOnly = Template.bind({});
ReviewOnly.args = {
  postData: {
    ...dummyPostData,
    quote: "",
    numOfDislikes: 0,
    numOfLikes: 24,
    userName: "harry potter",
    isSaved: true,
    isDisliked: true,
  },
};
