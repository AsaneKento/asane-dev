import { Content } from "./Content"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Home/Components/Content",
  component: Content,
  tags: ["autodocs"],
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof Content>

export const Default: Story = {}
