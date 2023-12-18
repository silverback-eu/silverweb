import { Toaster, toast, Button } from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toaster> = {
  title: "Apps/ Toast",
  tags: ["autodocs"],
  component: Toaster,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Normal: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const SuccessToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.success("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const WarningToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.warning("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.error("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const InfoToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.info("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const LoadingToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.loading("This is the Toast", {
          description: "This is a description of the toast",
        });
      }}
    >
      <span>Push Toaster</span>
    </Button>
  ),
};

export const PromiseToast: Story = {
  render: () => <PPromiseToast />,
};

function PPromiseToast(): JSX.Element {
  function delay(ms: number): Promise<unknown> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          reject(new Error("Something went wrong"));
        }
        resolve("Success!");
      }, ms);
    });
    return promise;
  }
  return (
    <Button
      onClick={() => {
        toast.promise(delay(5000), {
          loading: "Loading...",
          success: () => {
            return `Promise resolved`;
          },
          error: "Error",
        });
      }}
    >
      Push Toaster
    </Button>
  );
}
