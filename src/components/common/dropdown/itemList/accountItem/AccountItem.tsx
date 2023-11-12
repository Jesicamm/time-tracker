import { useState } from "react"
import ArrowIcon from "../../../../icons/arrowIcon"
import AccountList from "./accountList/AccountList"
import { Item } from "../../../../../types/TimeTracker"

interface AccountItemProps {
  name: string
  list: Array<Item>
}
const AccountItem: React.FC<AccountItemProps> = ({ name, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openSubCategories = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        type="button"
        className="inline-flex w-full justify-center items-center gap-x-1.5 px-3 py-2 text-xs text-grey"
        onClick={openSubCategories}
      >
        <ArrowIcon position="right" customStyle="absolute left-1" />

        {name}
      </button>
      <AccountList isOpen={isOpen} list={list} />
    </>
  )
}

export default AccountItem
