import {
  LoadingInput,
  VanillaSelect,
  VanillaSelectContent,
  VanillaSelectItem,
  VanillaSelectTrigger,
  VanillaSelectValue,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VanillaSelect> = {
  title: "Inputs/ Vanilla/ Select",
  tags: ["autodocs"],
  component: VanillaSelect,
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VanillaSelect>;

export const Normal: Story = {
  render: () => (
    <VanillaSelect>
      <VanillaSelectTrigger className="w-full">
        <VanillaSelectValue placeholder="Placeholder" />
      </VanillaSelectTrigger>
      <VanillaSelectContent>
        <VanillaSelectItem value="option-1">Option 1</VanillaSelectItem>
        <VanillaSelectItem value="option-2">Option 2</VanillaSelectItem>
        <VanillaSelectItem value="option-3">Option 3</VanillaSelectItem>
      </VanillaSelectContent>
    </VanillaSelect>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <VanillaSelect>
      <VanillaSelectTrigger className="w-full">
        <VanillaSelectValue placeholder="Placeholder" />
      </VanillaSelectTrigger>
      <VanillaSelectContent>
        <VanillaSelectItem value="option-1">Option 1</VanillaSelectItem>
        <VanillaSelectItem value="option-2">Option 2</VanillaSelectItem>
        <VanillaSelectItem value="option-3">Option 3</VanillaSelectItem>
      </VanillaSelectContent>
    </VanillaSelect>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <VanillaSelect {...args}>
      <VanillaSelectTrigger className="w-full">
        <VanillaSelectValue placeholder="Placeholder" />
      </VanillaSelectTrigger>
      <VanillaSelectContent>
        <VanillaSelectItem value="option-1">Option 1</VanillaSelectItem>
        <VanillaSelectItem value="option-2">Option 2</VanillaSelectItem>
        <VanillaSelectItem value="option-3">Option 3</VanillaSelectItem>
      </VanillaSelectContent>
    </VanillaSelect>
  ),
};

export const Success: Story = {
  render: (args) => (
    <VanillaSelect {...args} className="text-green-500">
      <VanillaSelectTrigger className="w-full">
        <VanillaSelectValue placeholder="Placeholder" />
      </VanillaSelectTrigger>
      <VanillaSelectContent>
        <VanillaSelectItem value="option-1">Option 1</VanillaSelectItem>
        <VanillaSelectItem value="option-2">Option 2</VanillaSelectItem>
        <VanillaSelectItem value="option-3">Option 3</VanillaSelectItem>
      </VanillaSelectContent>
    </VanillaSelect>
  ),
};

export const Error: Story = {
  render: (args) => (
    <VanillaSelect {...args} className="text-red-500">
      <VanillaSelectTrigger className="w-full">
        <VanillaSelectValue placeholder="Placeholder" />
      </VanillaSelectTrigger>
      <VanillaSelectContent>
        <VanillaSelectItem value="option-1">Option 1</VanillaSelectItem>
        <VanillaSelectItem value="option-2">Option 2</VanillaSelectItem>
        <VanillaSelectItem value="option-3">Option 3</VanillaSelectItem>
      </VanillaSelectContent>
    </VanillaSelect>
  ),
};

export const Loading: Story = {
  render: () => <LoadingInput variant="text" />,
};
