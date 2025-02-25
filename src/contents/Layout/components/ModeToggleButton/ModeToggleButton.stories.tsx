import type { ReactElement } from "react"
import { ThemeProvider } from "~/utils/ThemeProvider"
import { ModeToggleButton } from "./ModeToggleButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout/Components/ModeToggleButton",
  component: ModeToggleButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModeToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [
    (Story): ReactElement => {
      localStorage.setItem("theme", "light")

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      )
    },
  ],
}

export const Dark: Story = {
  args: {},
  decorators: [
    (Story): ReactElement => {
      localStorage.setItem("theme", "dark")

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      )
    },
  ],
}
