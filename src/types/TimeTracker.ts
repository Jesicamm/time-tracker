export type UserInfo = {
  id: string
  workStatus: WorkStatus
  firstName: string
  lastName: string
  workEntryIn: Date | undefined
  avatar: string
}

export type WorkStatus = "offline" | "online" | "paused" | ""

export type Item = {
  id: string
  name: string
  user?: string
  message?: string
}

export type DropdownItems = Item & {
  subItem: Item[]
}

export type WorkEntry = "workEntryIn" | "workEntryOut"
