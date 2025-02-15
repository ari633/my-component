import { fn } from "@storybook/test";
import { Dropdown } from "../../lib/components";

export default {
  title: "Form/Dropdown",
  component: Dropdown,
  argTypes: {},
  args: {
    onChange: fn(),
    placeholder: 'Select',
    label: "Label",
    options: [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Grape",
      "Orange",
      "Mango",
      "Pineapple",
      "Strawberry",
    ],
    multiple: true, 
    withSearch: true,
    outlined: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};
