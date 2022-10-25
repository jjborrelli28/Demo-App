import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PeopleGallery } from ".";
import { Card } from "../card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PeopleGallery",
  component: PeopleGallery,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PeopleGallery>;

const Template: ComponentStory<typeof PeopleGallery> = (args) => {
  return (
    <PeopleGallery>
      {mockup.map((person) => (
        <Card data={person} />
      ))}
    </PeopleGallery>
  );
};

export const Default = Template.bind({});

Default.args = {};

const mockup = [
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
  {
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    name: {
      first: "Jennie",
      last: "Nichols",
    },
  },
];
