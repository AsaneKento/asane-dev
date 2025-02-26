import { faker } from "@faker-js/faker"
import "@testing-library/jest-dom"
import { Factory } from "rosie"
import { afterAll, afterEach, beforeAll } from "vitest"

beforeAll(() => {
  // TODO: msw の server.listen()
})

afterEach(async () => {
  faker.seed()

  Factory.resetAll()
})

afterAll(() => {
  // TODO: msw の server.close()
})

// NOTE: `TypeError: window.matchMedia` が `next-themes` で発生するので対応
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vitest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vitest.fn(),
    removeListener: vitest.fn(),
    addEventListener: vitest.fn(),
    removeEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
})
