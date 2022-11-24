import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSearch } from "./input-search";
import { styled } from "../../../styles/stitches.config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/InputSearch",
  component: InputSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => {
  return <InputSearch />;
};

export const Default = Template.bind({});

Default.args = {};
