import { useEffect, useState } from "react"
import Avatar from "./avatar/Avatar"
import "./timeTracker.css"
import { TimeTracker as TimeTrackerService } from "../../../service/TimeTracker"
import { DropdownItems, UserInfo, WorkStatus, emptyUserInfo } from "../../../types/TimeTracker"
import Dropdown from "./dropdown/Dropdown"
import { items } from "./constants"
import ButtonGroup from "./buttonGroup/ButtonGroup"
import Counter from "./counter/Counter"

const TimeTracker: React.FC = () => {
  const img: string = "/avatar.png"
  const itemList: Array<DropdownItems> = items

  const [user, setUser] = useState<UserInfo>(emptyUserInfo)

  useEffect(() => {
    retrieve()
  }, [])

  const retrieve = async () => {
    const response = await TimeTrackerService.retrieveUserInfo()
    setUser(response)
  }

  const handleClockOut = async () => {
    const response: WorkStatus = await TimeTrackerService.clockOut(user.id)
    setUser({ ...user, workStatus: response })
  }

  const handleClockIn = async () => {
    const response: WorkStatus = await TimeTrackerService.clockIn(user.id)
    setUser({ ...user, workStatus: response })
  }

  const name = `${user.firstName} ${user.lastName}`

  return (
    <div className="time-tracker-container">
      <Counter rawDate={user.workEntryIn} status={user.workStatus} />
      <ButtonGroup status={user.workStatus} onClockOut={handleClockOut} onClockIn={handleClockIn} />
      <div className="time-tracker-profile">
        <Avatar img={img} status={user.workStatus} />
        <Dropdown title={name} itemList={itemList} />
      </div>
    </div>
  )
}

export default TimeTracker
