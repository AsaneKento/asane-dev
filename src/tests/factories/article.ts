import { faker } from "@faker-js/faker"
import { Factory } from "rosie"

export interface ArticleType {
  title: string
  excerpt: string
  category: string
  date: string
}

export const ArticleFactory = Factory.define<ArticleType>("Article").attrs({
  title: faker.lorem.words(3),
  excerpt: faker.lorem.sentence(),
  category: faker.helpers.arrayElement(["Frontend", "Backend", "Design"]),
  date: faker.date.future().toISOString().split("T")[0],
})
