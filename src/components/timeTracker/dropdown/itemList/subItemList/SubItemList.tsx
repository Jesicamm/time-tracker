import { Item } from "../../../../../types/TimeTracker"
import Initials from "./initials/Initals"

interface SubItemListProps {
  isOpen: boolean
  list: Array<Item>
}

const SubItemList: React.FC<SubItemListProps> = ({ isOpen, list }) => {
  const buildInitials = (text: string) => {
    const words = text.split(" ")
    const firstInitial = words[0].charAt(0)
    const number = words[1].toString()

    return firstInitial + number
  }

  return (
    <>
      {isOpen && (
        <div
          className="absolute right-60 top-[-13px] z-10 mt-2 w-56 bg-white shadow-lg divide-y divide-lightGrey rounded origin-top-right"
          aria-labelledby="submenu-button"
        >
          {list.map((item) => (
            <div key={item.id} className="py-1">
              <div className="left">
                <Initials initials={buildInitials(item.name)} />
              </div>
              <div className="right">
                <div className="sub-item-data">
                  <a className="text-grey text-xs">{item.name}</a>
                  <a className="text-grey text-xs">{item.user}</a>
                </div>
                <a className="text-grey text-xs">{item.message}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SubItemList
