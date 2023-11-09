import { render, screen } from "@testing-library/react"
import Avatar from "../../src/components/header/timeTracker/avatar/Avatar"
import { WorkStatus } from "../../src/types/TimeTracker"

describe("Avatar component", () => {
  describe("Status", () => {
    it("should displays 'teal'color when user is online", () => {
      const online: WorkStatus = "online"
      AVATAR.render(online)

      const span = AVATAR.getUserStatus()

      expect(span.className).toMatch(/bg-teal/i)
    })

    it("should displays 'salmon' when user is offline", () => {
      const offline: WorkStatus = "offline"
      AVATAR.render(offline)

      const span = AVATAR.getUserStatus()

      expect(span.className).toMatch(/bg-salmon/i)
    })
  })

  describe("Image", () => {
    it("should display the user image", () => {
      AVATAR.render("online")

      const image = AVATAR.getUserImg()

      expect(image).toBeInTheDocument()
    })
  })
})

class AVATAR {
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
