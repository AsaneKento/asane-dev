import { Article } from "~/tests/data/articles"
import { ArticleCard } from "./ArticleCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "components/ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    article: Article,
  },
}
