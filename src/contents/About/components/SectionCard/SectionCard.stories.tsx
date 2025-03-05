import { SectionCard } from "./SectionCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/About/Components/SectionCard",
  component: SectionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Expertise",
    items: ["React", "Next"],
  },
}
