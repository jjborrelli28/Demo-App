import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";
import { HomeIcon } from "../icons/home-icon";
import { DotsMenuIcon } from "../icons/dots-menu-icon";
import { styled } from "../../styles/stitches.config";
import { useState } from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <ButtonContainer>
      <Button
        {...args}
        onClick={() => setButtonState(!buttonState)}
        active={buttonState}
      >
        {args.variant === "round" ? (
          <DotsMenuIcon active={buttonState} />
        ) : args.variant === "rectangle" ? (
          <HomeIcon active={buttonState} />
        ) : args.variant === "primary" ? (
          "Primary btn"
        ) : (
          "Secondary btn"
        )}
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled("div", {
  h: "$headerHeight",
  w: "140px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Round = Template.bind({});
Round.args = {
  variant: "round",
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  variant: "rectangle",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
