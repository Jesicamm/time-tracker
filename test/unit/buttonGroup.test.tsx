import { render, screen } from "@testing-library/react"
import { WorkStatus } from "../../src/types/TimeTracker"
import ButtonGroup from "../../src/components/header/timeTracker/buttonGroup/ButtonGroup"

describe("ButtonGroup component", () => {
  it("should displays entry button when status is offline", () => {
    BUTTONGROUP.render("offline")

    const entryButton = BUTTONGROUP.getStatusButton("Entrar")

    expect(entryButton).toBeInTheDocument()
    expect(entryButton.className).toMatch(/teal/i)
  })

  it("should displays exit and paused buttons when status is online", () => {
    BUTTONGROUP.render("online")

    const exitButton = BUTTONGROUP.getStatusButton("Salir")
    const pauseButton = BUTTONGROUP.getStatusButton("Pausar")

    expect(exitButton).toBeInTheDocument()
    expect(exitButton.className).toMatch(/salmon/i)
    expect(pauseButton).toBeInTheDocument()
    expect(pauseButton.className).toMatch(/darkGrey/i)
  })

  it("should displays 'exit' and 'restart' buttons when status is paused", () => {
    BUTTONGROUP.render("paused")

    const exitButton = BUTTONGROUP.getStatusButton("Salir")
    const restartButton = BUTTONGROUP.getStatusButton("Reanudar")

    expect(exitButton).toBeInTheDocument()
    expect(exitButton.className).toMatch(/salmon/i)
    expect(restartButton).toBeInTheDocument()
    expect(restartButton.className).toMatch(/darkGrey/i)
  })

  it("shouldn't display any button when we have no status", () => {
    BUTTONGROUP.render("")

    const button = BUTTONGROUP.getButton()

    expect(button).not.toBeInTheDocument()
  })
})

class BUTTONGROUP {
  static render(status: WorkStatus) {
    render(
      <ButtonGroup status={status} onClockIn={() => {}} onClockOut={() => {}} onPause={() => {}} />
    )
  }

  static getStatusButton(text: string): HTMLElement {
    return screen.getByRole("button", { name: text })
  }

  static getButton(): HTMLElement | null {
    return screen.queryByRole("button")
  }
}
