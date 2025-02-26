import { LinkButton } from "./LinkButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout/Feature/Footer/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    link: "/",
    children: "リンクボタン",
  },
}
