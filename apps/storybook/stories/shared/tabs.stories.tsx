import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@silverweb/ui";
import { Fragment, useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Shared/ Tabs",
  tags: ["autodocs"],
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[400px]" defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const Manual: Story = {
  args: {
    activationMode: "manual",
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]" defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: ControlledTabs,
};

function ControlledTabs(args: Story["args"]): JSX.Element {
  const [value, setValue] = useState<string | undefined>("account");
  return (
    <Fragment>
      <Button
        className="m-2"
        onClick={() => {
          setValue("account");
        }}
      >
        Account
      </Button>
      <Button
        className="m-2"
        onClick={() => {
          setValue("password");
        }}
      >
        Password
      </Button>
      <Tabs {...args} className="w-[400px]" value={value}>
        <TabsList>
          <TabsTrigger className="cursor-default" value="account">
            Account
          </TabsTrigger>
          <TabsTrigger className="cursor-default" value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </Fragment>
  );
}
