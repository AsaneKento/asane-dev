import type { ReactElement } from "react"
import { ThemeProvider } from "~/utils/ThemeProvider"
import { ModeToggleButton } from "./ModeToggleButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Components/ModeToggleButton",
  component: ModeToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story): ReactElement => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ModeToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
