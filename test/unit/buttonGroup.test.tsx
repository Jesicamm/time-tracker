import { render, screen } from "@testing-library/react"
import { WorkStatus } from "../../src/types/TimeTracker"
import ButtonGroup from "../../src/components/timeTracker/buttonGroup/ButtonGroup"
import { Mock, vi } from "vitest"
import userEvent from "@testing-library/user-event"

describe("ButtonGroup component", () => {
  it("should display entry button when status is offline", () => {
    SUT.render("offline")

    const entryButton = SUT.getStatusButton("Entrar")

    expect(entryButton).toBeInTheDocument()
    expect(entryButton.className).toMatch(/teal/i)
  })

  it("should display exit and paused buttons when status is online", () => {
    SUT.render("online")

    const exitButton = SUT.getStatusButton("Salir")
    const pauseButton = SUT.getStatusButton("Pausar")

    expect(exitButton).toBeInTheDocument()
    expect(exitButton.className).toMatch(/salmon/i)
    expect(pauseButton).toBeInTheDocument()
    expect(pauseButton.className).toMatch(/lightGrey/i)
  })

  it("should display 'exit' and 'restart' buttons when status is paused", () => {
    SUT.render("paused")

    const exitButton = SUT.getStatusButton("Salir")
    const restartButton = SUT.getStatusButton("Reanudar")

    expect(exitButton).toBeInTheDocument()
    expect(exitButton.className).toMatch(/salmon/i)
    expect(restartButton).toBeInTheDocument()
    expect(restartButton.className).toMatch(/lightGrey/i)
  })

  it("shouldn't display any button when we have no status", () => {
    SUT.render("")

    const button = SUT.getButton()

    expect(button).not.toBeInTheDocument()
  })

  describe("Alerts parent component to update workStatus", () => {
    it("should call onClockIn event when clicks entry button", async () => {
      SUT.render("offline")

      const entryButton = SUT.getStatusButton("Entrar")
      await userEvent.click(entryButton)

      expect(SUT.onClockInSpy).toHaveBeenCalledTimes(1)
    })

    it("should call onClockOut event when clicks exit button", async () => {
      SUT.render("online")

      const exitButton = SUT.getStatusButton("Salir")
      await userEvent.click(exitButton)

      expect(SUT.onClockOutSpy).toHaveBeenCalledTimes(1)
    })

    it("should call onPause event when clicks pause button", async () => {
      SUT.render("online")

      const pauseButton = SUT.getStatusButton("Pausar")
      await userEvent.click(pauseButton)

      expect(SUT.onPauseSpy).toHaveBeenCalledTimes(1)
    })
  })
})

class SUT {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  static onClockInSpy: Mock<any, any> = vi.fn()
  static onClockOutSpy: Mock<any, any> = vi.fn()
  static onPauseSpy: Mock<any, any> = vi.fn()
  static onRestartSpy: Mock<any, any> = vi.fn()
  /* eslint-enable @typescript-eslint/no-explicit-any */

  static render(status: WorkStatus) {
    render(
      <ButtonGroup
        status={status}
        onClockIn={this.onClockInSpy}
        onClockOut={this.onClockOutSpy}
        onPause={this.onPauseSpy}
        onRestart={this.onRestartSpy}
      />
    )
  }

  static getStatusButton(text: string): HTMLElement {
    return screen.getByRole("button", { name: text })
  }

  static getButton(): HTMLElement | null {
    return screen.queryByRole("button")
  }
}
