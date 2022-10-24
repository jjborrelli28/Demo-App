import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
Default.args = {};
