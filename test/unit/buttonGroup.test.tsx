import { render, screen } from "@testing-library/react"
import { WorkStatus } from "../../src/types/TimeTracker"
import ButtonGroup from "../../src/components/header/timeTracker/buttonGroup/ButtonGroup"

describe("ButtonGroup component", () => {
  it("should displays 'enter' button when status is offline", () => {
    BUTTONGROUP.render("offline")

    const enterButton = BUTTONGROUP.getStatusButton("Entrar")

    expect(enterButton).toBeInTheDocument()
    expect(enterButton.className).toMatch(/teal/i)
  })

  it("should displays 'get out' and 'paused' buttons when status is online", () => {
    BUTTONGROUP.render("online")

    const getOutButton = BUTTONGROUP.getStatusButton("Salir")
    const pauseButton = BUTTONGROUP.getStatusButton("Pausar")

    expect(getOutButton).toBeInTheDocument()
    expect(getOutButton.className).toMatch(/salmon/i)
    expect(pauseButton).toBeInTheDocument()
    expect(pauseButton.className).toMatch(/darkGrey/i)
  })

  it("should displays 'get out' and 'restart' buttons when status is paused", () => {
    BUTTONGROUP.render("paused")

    const getOutButton = BUTTONGROUP.getStatusButton("Salir")
    const restartButton = BUTTONGROUP.getStatusButton("Reanudar")

    expect(getOutButton).toBeInTheDocument()
    expect(getOutButton.className).toMatch(/salmon/i)
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
    render(<ButtonGroup status={status} />)
  }

  static getStatusButton(text: string): HTMLElement {
    return screen.getByRole("button", { name: text })
  }

  static getButton(): HTMLElement | null {
    return screen.queryByRole("button")
  }
}
