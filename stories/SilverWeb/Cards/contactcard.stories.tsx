import ContactCard from "@/components/silverweb/cards/ContactCard";
import LoadingCard from "@/components/silverweb/cards/LoadingCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContactCard> = {
  title: "SilverWeb/Cards/ContactCard",
  component: ContactCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', width: '250px' }}>
        <Story />
      </div>
    ),
]
};

export default meta;

type Story = StoryObj<typeof ContactCard>;

export const Normal: Story = {
    args: {
        info: {
            name: "Frederik Willem Grimm",
            job: "Fullstack Developer",
            company: "SilverBack",
            email: "fgrimm@silverback-group.eu",
            phone: "+49 1234567890",
        },
        comments: [
            {
              author: "Freddy Grimm",
              text: "Laboris nulla aliquip ea reprehenderit id ullamco deserunt ad. Incididunt quis quis Lorem exercitation anim. Eu occaecat ea amet cillum et occaecat ad laborum enim id incididunt enim.",
              createdAt: "2023-01-01",
            },
            {
              author: "Freddy Grimm",
              text: "Minim amet velit voluptate aute est exercitation dolore. Consequat consectetur aute pariatur laborum aute cillum eiusmod proident ullamco. Irure dolore reprehenderit nulla ex do proident exercitation. Laborum sint dolor incididunt magna qui eu dolore enim dolore sint aliquip anim ullamco dolor. Fugiat quis culpa Lorem sunt Lorem nisi aliquip aliqua Lorem labore. Cillum eiusmod culpa velit aute cillum exercitation est fugiat. Lorem et velit occaecat aliquip.",
              createdAt: "2023-01-01",
            },
            {
              author: "Freddy Grimm",
              text: "Occaecat cupidatat adipisicing cupidatat magna commodo sit consequat mollit aliquip ipsum nisi consectetur ea. Ullamco Lorem reprehenderit quis nulla nulla minim in exercitation ullamco. Elit Lorem tempor eiusmod do et id. Incididunt id non incididunt exercitation nisi amet adipisicing amet esse magna qui tempor. Sint nostrud esse proident ex minim non ea dolor do elit mollit nostrud pariatur id. Occaecat ipsum incididunt consectetur ad ullamco.",
              createdAt: "2023-01-01",
            },
            {
              author: "Freddy Grimm",
              text: "Nostrud incididunt excepteur officia laborum ad aliquip ipsum nisi amet. Incididunt reprehenderit sunt ipsum irure. Incididunt et ipsum ullamco amet fugiat excepteur duis officia ut culpa. Aute commodo irure sunt tempor laboris aute adipisicing tempor voluptate commodo ea nostrud. Magna non cupidatat dolore ea nisi laboris adipisicing cillum consequat consequat minim amet ex.",
              createdAt: "2023-01-01",
            },
            {
              author: "Freddy Grimm",
              text: "Ut dolor in do sint. Eu ex aliqua sit reprehenderit eu commodo dolor cillum enim id consectetur. Tempor deserunt veniam reprehenderit excepteur irure aliquip duis duis consectetur et laborum. Magna aliquip do irure fugiat ipsum nisi. Consectetur fugiat sint cillum elit ipsum ex quis id incididunt incididunt ex veniam. Dolor elit eu velit magna voluptate mollit elit amet. Veniam aliquip laborum eiusmod non eiusmod anim ullamco ad minim.",
              createdAt: "2023-01-01",
            },
          ],
    }
};

export const Loading: Story = {
    render: () => <LoadingCard />
}
