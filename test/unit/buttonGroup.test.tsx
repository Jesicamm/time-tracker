import { render, screen } from "@testing-library/react"
import { WorkStatus } from "../../src/types/TimeTracker"
import ButtonGroup from "../../src/components/header/timeTracker/buttonGroup/ButtonGroup"

describe("ButtonGroup component", () => {
  it("should displays 'enter' button when status is offline", () => {
    SUT.render("offline")

    const enterButton = SUT.getStatusButton("Entrar")

    expect(enterButton).toBeInTheDocument()
    expect(enterButton.className).toMatch(/teal/i)
  })

  it("should displays 'get out' and 'paused' buttons when status is online", () => {
    SUT.render("online")

    const getOutButton = SUT.getStatusButton("Salir")
    const pauseButton = SUT.getStatusButton("Pausar")

    expect(getOutButton).toBeInTheDocument()
    expect(getOutButton.className).toMatch(/salmon/i)
    expect(pauseButton).toBeInTheDocument()
    expect(pauseButton.className).toMatch(/darkGrey/i)
  })

  it("should displays 'get out' and 'restart' buttons when status is paused", () => {
    SUT.render("paused")

    const getOutButton = SUT.getStatusButton("Salir")
    const restartButton = SUT.getStatusButton("Reanudar")

    expect(getOutButton).toBeInTheDocument()
    expect(getOutButton.className).toMatch(/salmon/i)
    expect(restartButton).toBeInTheDocument()
    expect(restartButton.className).toMatch(/darkGrey/i)
  })

  it("shouldn't display any button when we have no status", () => {
    SUT.render("")

    const button = SUT.getButton()

    expect(button).not.toBeInTheDocument()
  })
})

class SUT {
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
