import { act, render, screen } from "@testing-library/react"
import TimeTracker from "../../src/components/timeTracker/TimeTracker"
import { TimeTracker as TimeTrackerService } from "../../src/service/TimeTracker"
import { vi } from "vitest"
import { UserInfo, WorkStatus } from "../../src/types/TimeTracker"
import userEvent from "@testing-library/user-event"
describe("Time Tracker component", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should calls 'getUserInfo' service when show time tracker", async () => {
    const spy = vi
      .spyOn(TimeTrackerService, "retrieveUserInfo")
      .mockResolvedValue(SUT.userInfo("online"))
    await SUT.render()

    expect(spy).toHaveBeenCalledTimes(1)
  })

  it("should calls service and update workStatus when clicks exit button ", async () => {
    const spy = vi.spyOn(TimeTrackerService, "clockOut").mockResolvedValue("offline")
    await SUT.render()

    const exitButton = SUT.getButton("Salir")
    await userEvent.click(exitButton)

    const entryButton = SUT.getButton("Entrar")
    expect(spy).toHaveBeenCalledWith(SUT.id)
    expect(entryButton).toBeInTheDocument()
    expect(exitButton).not.toBeInTheDocument()
  })

  it("should calls service and update workStatus when clicks entry button ", async () => {
    vi.spyOn(TimeTrackerService, "retrieveUserInfo").mockResolvedValue(SUT.userInfo("offline"))
    const spy = vi.spyOn(TimeTrackerService, "clockIn").mockResolvedValue("online")
    await SUT.render()

    const entryButton = SUT.getButton("Entrar")
    await userEvent.click(entryButton)

    const exitButton = SUT.getButton("Salir")
    expect(spy).toHaveBeenCalledWith(SUT.id)
    expect(entryButton).not.toBeInTheDocument()
    expect(exitButton).toBeInTheDocument()
  })
})

class SUT {
  static id: string = "anId"
  static async render() {
    await act(async () => {
      render(<TimeTracker />)
    })
  }

  static getButton(title: string): HTMLElement {
    return screen.getByRole("button", { name: title })
  }
  static userInfo(status: WorkStatus): UserInfo {
    return {
      id: this.id,
      workStatus: status,
      firstName: "aName",
      lastName: "aLastName",
      workEntryIn: new Date(),
    }
  }
}
