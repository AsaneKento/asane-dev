import { AppWindowIcon } from "lucide-react"
import { LinkCard } from "./LinkCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Home/components/LinkCard",
  component: LinkCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Sample Title",
    link: "/",
  },
}

export const Icon: Story = {
  args: {
    title: "Sample Title",
    link: "/",
    icon: <AppWindowIcon aria-label={"icon"} />,
  },
}
