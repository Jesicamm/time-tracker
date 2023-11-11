import { useState } from "react"
import ArrowIcon from "../../../../icons/arrowIcon"
import { DropdownItems } from "../../../../types/TimeTracker"
import SubItemList from "./subItemList/SubItemList"

interface ItemListProps {
  isVisible: boolean
  itemList: Array<DropdownItems>
}

const ItemList: React.FC<ItemListProps> = ({ isVisible, itemList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openSubCategories = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isVisible && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-lightGrey shadow-lg"
          aria-labelledby="menu-button"
        >
          {itemList.map(({ name, id, subItem }) => (
            <div className="py-1" key={id}>
              {subItem.length > 0 ? (
                <>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center items-center gap-x-1.5 px-3 py-2 text-xs text-grey shadow-sm"
                    onClick={openSubCategories}
                  >
                    <ArrowIcon position="right" />

                    {name}
                  </button>
                  <SubItemList isOpen={isOpen} list={subItem} />
                </>
              ) : (
                <a
                  href="#"
                  className="text-grey block px-4 py-2 text-xs text-center"
                  role="menuitem"
                >
                  {name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ItemList
