import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import Counter from "../../src/components/header/timeTracker/counter/Counter"

describe("Counter Component", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(SUT.date)
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it("renders initial time correctly", () => {
    SUT.render()

    const initialTime = SUT.getTime()

    expect(initialTime).toBeInTheDocument()
  })
})

class SUT {
  static date = new Date("2023-11-10T12:30:00")

  static render() {
    render(<Counter rawDate={this.date} status="online" />)
  }

  static getTime(): HTMLElement {
    return screen.getByText("12:30:00")
  }
}
