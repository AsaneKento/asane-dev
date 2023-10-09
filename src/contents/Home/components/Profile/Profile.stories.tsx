import { Profile } from "./Profile"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Home/Components/Profile",
  component: Profile,
  tags: ["autodocs"],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {}
