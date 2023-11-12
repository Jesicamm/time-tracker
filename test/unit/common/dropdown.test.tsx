import Dropdown from "../../../src/components/common/dropdown/Dropdown"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DropdownItems } from "../../../src/types/TimeTracker"

describe("Dropdown component", () => {
  it("should display dropdown title", () => {
    SUT.render()

    const title = SUT.getTitle()

    expect(title).toBeInTheDocument()
  })

  it("should open drowpdown when clicks button and displays itemList", async () => {
    SUT.render()

    expect(SUT.getAnItem()).not.toBeInTheDocument()

    await userEvent.click(SUT.getTitle())

    expect(SUT.getAnItem()).toBeInTheDocument()
  })

  it("should display <a> element if the element hasn't got subgroup items", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const aBasicItem = SUT.getBasicItem()
    const allBasicItems = SUT.getAllBasicItems()

    expect(aBasicItem).toBeInTheDocument()
    expect(allBasicItems.length).toBe(1)
  })

  it("should display button element if the item list has subgroup items", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const buttonItem = SUT.getButtonItem()

    expect(buttonItem).toBeInTheDocument()
  })

  it("should display sub items dropdown when clicks first dropdown button", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const buttonItem = SUT.getButtonItem()
    await userEvent.click(buttonItem)
    const user = SUT.getSubItemsUser()
    const accountName = SUT.getSubItemsName()

    expect(user).toBeInTheDocument()
    expect(accountName).toBeInTheDocument()
  })

  it("should display the initials of name account when uncollapsed sub items dropdown", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const buttonItem = SUT.getButtonItem()
    await userEvent.click(buttonItem)
    const initials = SUT.getSubItemsInitials()

    expect(initials).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    render(<Dropdown title="title" itemList={this.itemList} />)
  }

  static getTitle(): HTMLElement {
    return screen.getByRole("button", { name: "title" })
  }

  static getAnItem(): HTMLElement | null {
    return screen.queryByText("Mis Cuentas")
  }

  static getBasicItem(): HTMLElement {
    return screen.getByRole("menuitem")
  }

  static getAllBasicItems(): Array<HTMLElement> {
    return screen.getAllByRole("menuitem")
  }

  static getButtonItem(): HTMLElement {
    return screen.getByRole("button", { name: "Mis Cuentas" })
  }

  static getSubItemsUser(): HTMLElement {
    return screen.getByText("an user")
  }

  static getSubItemsName(): HTMLElement {
    return screen.getByText("SubItem 1")
  }

  static getSubItemsInitials(): HTMLElement {
    return screen.getByText("S1")
  }

  private static itemList: Array<DropdownItems> = [
    {
      id: "1",
      name: "Mis Cuentas",
      subItem: [
        {
          id: "10",
          name: "SubItem 1",
          user: "an user",
          message: "a message",
        },
      ],
    },
    {
      id: "2",
      name: "another item",
      subItem: [],
    },
  ]
}
