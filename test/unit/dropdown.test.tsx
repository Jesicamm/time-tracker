import Dropdown from "../../src/components/header/timeTracker/dropdown/Dropdown"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DropdownItems } from "../../src/types/TimeTracker"

describe("Dropdown component", () => {
  it("should displays dropdown title", () => {
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

  it("should displays <a> element if the element hasn't got subgroup items", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const aBasicItem = SUT.getBasicItem()
    const allBasicItems = SUT.getAllBasicItems()

    expect(aBasicItem).toBeInTheDocument()
    expect(allBasicItems.length).toBe(1)
  })

  it("should displays button element if the item list has subgroup items", async () => {
    SUT.render()

    await userEvent.click(SUT.getTitle())
    const buttonItem = SUT.getButtonItem()

    expect(buttonItem).toBeInTheDocument()
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
