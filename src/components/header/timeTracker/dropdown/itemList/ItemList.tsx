import ArrowIcon from "../../../../../icons/arrowIcon"
import { DropdownItems } from "../../../../../types/TimeTracker"

interface ItemListProps {
  isVisible: boolean
  itemList: Array<DropdownItems>
}

const ItemList: React.FC<ItemListProps> = ({ isVisible, itemList }) => {
  return (
    <>
      {isVisible && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y shadow-lg"
          aria-labelledby="menu-button"
        >
          {itemList.map(({ name, id, subItem }) => (
            <div className="py-1" key={id}>
              {subItem.length > 0 ? (
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center items-center gap-x-1.5 px-3 py-2 text-xs  text-grey shadow-sm"
                  >
                    <ArrowIcon position="right" />

                    {name}
                  </button>
                </div>
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
