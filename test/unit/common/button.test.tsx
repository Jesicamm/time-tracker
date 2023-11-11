import { render, screen } from "@testing-library/react"

import Button from "../../../src/components/common/button/Button"
import { Mock, vi } from "vitest"
import userEvent from "@testing-library/user-event"

describe("Button Component", () => {
  it("should display the text received as a prop", () => {
    const text: string = "aText"
    render(<Button text={text} color={""} onClick={() => {}} />)

    const titleButton = screen.getByRole("button", { name: text })

    expect(titleButton).toBeInTheDocument()
  })

  it("should contain the color received as a prop", () => {
    const color: string = "aColor"
    render(<Button text={""} color={color} onClick={() => {}} />)

    const button = screen.getByRole("button")

    expect(button.className).toMatch(/aColor/i)
  })

  it("should call the onClick event when the button is clicked", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy: Mock<any, any> = vi.fn()

    render(<Button text={""} color={""} onClick={spy} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
