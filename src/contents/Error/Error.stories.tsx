import { Error } from "./Error"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Error",
  component: Error,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  args: {
    errorCode: "404",
    errorMsg: "Not Found",
    description: "ページが見つかりませんでした。",
  },
}

export const ServerError: Story = {
  args: {
    errorCode: "500",
    errorMsg: "Server Error",
    description: "予期せぬエラーが発生しました",
  },
}
