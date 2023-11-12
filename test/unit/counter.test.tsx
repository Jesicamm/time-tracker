import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import Counter from "../../src/components/timeTracker/counter/Counter"
import { WorkStatus } from "../../src/types/TimeTracker"

describe("Counter Component", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(SUT.date)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should render initial time correctly", () => {
    SUT.render("online")

    const initialTime = SUT.getTime()

    expect(initialTime).toBeInTheDocument()
  })

  it("should show the total work day time only if status is online", () => {
    SUT.render("online")

    const totalWorkHours = SUT.getTotalWorkHours()

    expect(totalWorkHours).toBeInTheDocument()
  })

  it("should not show the total work day time if status is not online", () => {
    SUT.render("offline")

    const totalWorkHours = SUT.getTotalWorkHours()

    expect(totalWorkHours).not.toBeInTheDocument()
  })
})

class SUT {
  static date = new Date("2023-11-10T12:30:00")

  static render(status: WorkStatus) {
    render(<Counter rawDate={this.date} status={status} />)
  }

  static getTime(): HTMLElement {
    return screen.getByText("12:30:00")
  }

  static getTotalWorkHours(): HTMLElement | null {
    return screen.queryByText("08:00:00")
  }
}
