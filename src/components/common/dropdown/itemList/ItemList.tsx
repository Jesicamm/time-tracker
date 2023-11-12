import { DropdownItems } from "../../../../types/TimeTracker"
import AccountItem from "./accountItem/AccountItem"
import MenuItem from "./menuItem/MenuItem"

interface ItemListProps {
  isVisible: boolean
  itemList: Array<DropdownItems>
}

const ItemList: React.FC<ItemListProps> = ({ isVisible, itemList }) => {
  return (
    <>
      {isVisible && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-lighestGrey shadow-lg"
          aria-labelledby="menu-button"
        >
          {itemList.map(({ name, id, subItem }) => (
            <div className="py-1" key={id}>
              {name == "Mis Cuentas" ? (
                <AccountItem name={name} list={subItem} />
              ) : (
                <MenuItem name={name} />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ItemList
