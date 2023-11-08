export type UserInfo = {
  id: string
  workStatus: WorkStatus
  firstName: string
  lastName: string
  workEntryIn: Date | undefined
}

export type WorkStatus = "offline" | "online" | "paused" | ""

export const emptyUserInfo: UserInfo = {
  id: "",
  workStatus: "",
  firstName: "",
  lastName: "",
  workEntryIn: undefined,
}
