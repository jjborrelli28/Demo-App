import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    controls: {
      include: ["image"],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
};
