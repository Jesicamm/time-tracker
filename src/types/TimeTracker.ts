export type UserInfo = {
  id: string
  workStatus: WorkStatus
  firstName: string
  lastName: string
  workEntryIn: Date | undefined
}

export type WorkStatus = "offline" | "online" | "paused" | ""

type Item = {
  id: string
  name: string
}

export type DropdownItems = Item & {
  subItem: Item[]
}

export type WorkEntry = "workEntryIn" | "workEntryOut"

export const emptyUserInfo: UserInfo = {
  id: "",
  workStatus: "",
  firstName: "",
  lastName: "",
  workEntryIn: undefined,
}
