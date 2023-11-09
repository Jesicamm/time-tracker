import Dropdown from "../../src/components/header/timeTracker/dropdown/Dropdown"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DropdownItems } from "../../src/types/TimeTracker"

describe("Dropdown component", () => {
  it("should displays dropdown title", () => {
    DROPDOWN.render()

    const title = DROPDOWN.getTitle()

    expect(title).toBeInTheDocument()
  })

  it("should open drowpdown when clicks button and displays itemList", async () => {
    DROPDOWN.render()

    expect(DROPDOWN.getAnItem()).not.toBeInTheDocument()

    await userEvent.click(DROPDOWN.getTitle())

    expect(DROPDOWN.getAnItem()).toBeInTheDocument()
  })

  it("should displays <a> element if the element hasn't got subgroup items", async () => {
    DROPDOWN.render()

    await userEvent.click(DROPDOWN.getTitle())
    const aBasicItem = DROPDOWN.getBasicItem()
    const allBasicItems = DROPDOWN.getAllBasicItems()

    expect(aBasicItem).toBeInTheDocument()
    expect(allBasicItems.length).toBe(1)
  })

  it("should displays button element if the item list has subgroup items", async () => {
    DROPDOWN.render()

    await userEvent.click(DROPDOWN.getTitle())
    const buttonItem = DROPDOWN.getButtonItem()

    expect(buttonItem).toBeInTheDocument()
  })
})

class DROPDOWN {
  static render() {
    render(<Dropdown title="title" itemList={this.itemList} />)
  }

  static getTitle(): HTMLElement {
    return screen.getByRole("button", { name: "title" })
  }

  static getAnItem(): HTMLElement | null {
    return screen.queryByText("an item")
  }

  static getBasicItem(): HTMLElement {
    return screen.getByRole("menuitem")
  }

  static getAllBasicItems(): Array<HTMLElement> {
    return screen.getAllByRole("menuitem")
  }

  static getButtonItem(): HTMLElement {
    return screen.getByRole("button", { name: "an item" })
  }

  private static itemList: Array<DropdownItems> = [
    {
      id: "1",
      name: "an item",
      subItem: [
        {
          id: "10",
          name: "a subItem",
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
