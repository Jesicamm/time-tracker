import { useEffect, useState } from "react"
import Avatar from "./avatar/Avatar"
import "./timeTracker.css"
import { TimeTracker as TimeTrackerService } from "../../service/TimeTracker"
import { UserInfo, WorkStatus } from "../../types/TimeTracker"
import Dropdown from "../common/dropdown/Dropdown"
import { defaultDropdownItems } from "./constants"
import ButtonGroup from "./buttonGroup/ButtonGroup"
import Counter from "./counter/Counter"
import { emptyUserInfo } from "../../types/empty/emptyTimeTracker"

const TimeTracker: React.FC = () => {
  const [user, setUser] = useState<UserInfo>(emptyUserInfo)

  useEffect(() => {
    retrieve()
  }, [])

  const retrieve = async () => {
    const user = await TimeTrackerService.retrieveUserInfo()
    setUser(user)
  }

  const handleClockOut = async () => {
    const workStatus: WorkStatus = await TimeTrackerService.clockOut(user.id)
    setUser({ ...user, workStatus: workStatus })
  }

  const handleClockIn = async () => {
    const workStatus: WorkStatus = await TimeTrackerService.clockIn(user.id)
    setUser({ ...user, workStatus: workStatus })
  }

  const handlePause = () => {
    setUser({ ...user, workStatus: "paused" })
  }

  const handleRestart = () => {
    setUser({ ...user, workStatus: "online" })
  }

  const name = `${user.firstName} ${user.lastName}`

  return (
    <div className="time-tracker-container">
      <Counter rawDate={user.workEntryIn} status={user.workStatus} />
      <ButtonGroup
        status={user.workStatus}
        onClockOut={handleClockOut}
        onClockIn={handleClockIn}
        onPause={handlePause}
        onRestart={handleRestart}
      />
      <hr className="h-6 w-0.5 bg-lightGrey" />
      <Avatar img={user.avatar} status={user.workStatus} />
      <Dropdown title={name} itemList={defaultDropdownItems} />
    </div>
  )
}

export default TimeTracker
