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
          className="absolute transform translate-x-[-105%] top-[-13px] z-10 mt-2 w-56 bg-white shadow-lg divide-y divide-lighestGrey rounded origin-top-right"
          aria-labelledby="submenu-button"
        >
          {list.map((item) => (
            <div
              key={item.id}
              className="py-1.5 grid grid-flow-col justify-start gap-4 p-4 items-center hover:bg-lightTeal cursor-pointer"
            >
              <div>
                <Initials initials={buildInitials(item.name)} />
              </div>
              <div className="grid grid-flow-row">
                <div className="grid grid-flow-col gap-1">
                  <a className="font-semibold text-darkestGrey text-xs">{item.name}</a>
                  <a className="text-darkestGrey text-xs">{item.user}</a>
                </div>
                <a className="text-lightGrey text-xs">{item.message}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SubItemList
