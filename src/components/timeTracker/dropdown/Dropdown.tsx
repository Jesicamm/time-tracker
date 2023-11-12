import { useState } from "react"
import ItemList from "./itemList/ItemList"
import ArrowIcon from "../../../icons/arrowIcon"
import { DropdownItems } from "../../../types/TimeTracker"

interface DropdownProps {
  title: string
  itemList: Array<DropdownItems>
}

const Dropdown: React.FC<DropdownProps> = ({ title, itemList }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const openDropdown = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex gap-x-1.5 px-3 py-2 text-sm text-extraDarkGrey font-semibold"
          onClick={openDropdown}
        >
          {title}
          <ArrowIcon position="bottom" />
        </button>
      </div>
      <ItemList isVisible={isVisible} itemList={itemList} />
    </div>
  )
}

export default Dropdown
