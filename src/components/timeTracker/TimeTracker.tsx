import { useEffect, useState } from "react"
import Avatar from "./avatar/Avatar"
import "./timeTracker.css"
import { TimeTracker as TimeTrackerService } from "../../service/TimeTracker"
import { UserInfo } from "../../types/TimeTracker"
import Dropdown from "../common/dropdown/Dropdown"
import { defaultDropdownItems } from "./constants"
import ButtonGroup from "./buttonGroup/ButtonGroup"
import Counter from "./counter/Counter"
import { emptyUserInfo } from "../../constants/emptyTimeTracker"

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
    const result = await TimeTrackerService.clockOut(user.id)
    setUser(result)
  }

  const handleClockIn = async () => {
    const result = await TimeTrackerService.clockIn(user.id)
    setUser(result)
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
      <Counter
        rawDate={user.workEntryIn}
        status={user.workStatus}
        workedSeconds={user.workedSeconds}
      />
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
