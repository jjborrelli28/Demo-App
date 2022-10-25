import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "../../styles/stitches.config";
import { Card } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <CardContainer>
      <Card {...args} />
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  maxw: "240px",
});

export const Default = Template.bind({});

Default.args = {
  data: {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
};
