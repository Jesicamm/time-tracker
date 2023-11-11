import { Item } from "../../../../../types/TimeTracker"

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
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded">
          <ul>
            {list.map((item) => (
              <li key={item.id} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <div className="left">{buildInitials(item.name)}</div>
                <div className="right">
                  <div className="sub-item-data">
                    <p>{item.name}</p>
                    <p>{item.user}</p>
                  </div>
                  <div>{item.message}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default SubItemList
