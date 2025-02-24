import RootLayout from "./layout"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Pages/Home/Layout",
  component: RootLayout,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof RootLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <p>トップページ</p>,
  },
}
