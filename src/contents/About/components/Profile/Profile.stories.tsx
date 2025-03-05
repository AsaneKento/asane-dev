import { Profile } from "./Profile"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/About/Components/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
