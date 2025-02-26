import { Section } from "./Section"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout/Feature/Footer/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "セクションタイトル",
    children: "セクション内容",
  },
}
