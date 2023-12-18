// import type { Meta, StoryObj } from "@storybook/react";
// import type { FormGeneratorProps } from "@silverweb/ui";
// import { FormGenerator, Toaster, toast } from "@silverweb/ui";
// import { Fragment } from "react";
// import { z } from "zod";

// const meta: Meta<typeof FormGenerator> = {
//   title: "Apps/ FormGenerator",
//   tags: ["autodocs"],
//   component: FormGenerator,
//   decorators: [
//     (Story) => (
//       <Fragment>
//         <div className="w-[500px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
//           <Story />
//         </div>
//         <Toaster />
//       </Fragment>
//     ),
//   ],
// };

// export default meta;

// type Story = StoryObj<typeof FormGenerator>;

// const fields: FormGeneratorProps["fields"] = [
//   {
//     header: "Account Settings",
//     name: "Account",
//     description: "Make changes to your account here.",
//     fields: {
//       username: {
//         type: "text",
//         label: "Username",
//         rules: z.string().min(3),
//       },
//       email: {
//         type: "text",
//         label: "Email",
//         rules: z.string().email(),
//       },
//       subscription: {
//         type: "checkbox",
//         label: "Subscribe to newsletter",
//         items: [
//           {
//             label: "Subscribe to all newsletter",
//             value: "subscribeAll",
//           },
//           {
//             label: "Subscribe to job newsletter",
//           },
//         ],
//       },
//     },
//   },
//   {
//     header: "Password Settings",
//     name: "Password",
//     description: "Change your password here.",
//     fields: {
//       password: {
//         type: "text",
//         label: "Password",
//         rules: z.string().min(8),
//       },
//       passwordConfirm: {
//         type: "text",
//         label: "Password Confirm",
//         rules: z.string().min(8),
//       },
//     },
//   },
//   {
//     header: "Other Settings",
//     name: "Other",
//     description: "Change your password here.",
//     fields: {
//       other: {
//         type: "text",
//         label: "Other",
//         rules: z.string().min(8),
//       },
//     },
//   },
// ];

// export const Normal: Story = {
//   args: {
//     fields,
//     onSubmit: (values) => {
//       toast.success("Submitted", {
//         description: <pre>{`${JSON.stringify(values, null, 2)}`}</pre>,
//       });
//     },
//   },
// };
