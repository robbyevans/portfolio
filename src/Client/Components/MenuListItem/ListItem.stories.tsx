import { Meta, StoryFn } from "@storybook/react";

import ListItemComponent from "./ListItem";
import CommandIcon from "../../Icons/command.svg";

export default {
  component: ListItemComponent,

  parameters: {
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  title: "Components/ListItem",
} as Meta<typeof ListItemComponent>;

const Template: StoryFn<typeof ListItemComponent> = (args) => (
  <ListItemComponent {...args} />
);

export const ListItem = Template.bind({});
ListItem.args = {
  text: "Github",
  icon: CommandIcon,
};
