import { render, screen } from "@testing-library/react"
import Avatar from "../../src/components/header/timeTracker/avatar/Avatar"
import { WorkStatus } from "../../src/types/TimeTracker"

describe("Avatar component", () => {
  describe("Status", () => {
    it("should display 'teal'color when user is online", () => {
      const online: WorkStatus = "online"
      SUT.render(online)

      const span = SUT.getUserStatus()

      expect(span.className).toMatch(/bg-teal/i)
    })

    it("should display 'salmon' when user is offline", () => {
      const offline: WorkStatus = "offline"
      SUT.render(offline)

      const span = SUT.getUserStatus()

      expect(span.className).toMatch(/bg-salmon/i)
    })
  })

  describe("Image", () => {
    it("should display the user image", () => {
      SUT.render("online")

      const image = SUT.getUserImg()

      expect(image).toBeInTheDocument()
    })
  })
})

class SUT {
  static render(status: WorkStatus) {
    render(<Avatar status={status} img="anImage" />)
  }

  static getUserStatus(): HTMLElement {
    return screen.getByRole("status")
  }

  static getUserImg(): HTMLElement {
    return screen.getByRole("img", { name: "avatar" })
  }
}
