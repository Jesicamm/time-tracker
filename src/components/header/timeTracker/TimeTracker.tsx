import { useEffect, useState } from "react"
import Avatar from "./avatar/Avatar"
import "./timeTracker.css"
import { TimeTracker as TimeTrackerService } from "../../../service/TimeTracker"
import { UserInfo, emptyUserInfo } from "../../../types/TimeTracker"

const TimeTracker: React.FC = () => {
  const img: string = "/avatar.png"
  const [user, setUser] = useState<UserInfo>(emptyUserInfo)

  useEffect(() => {
    retrieve()
  }, [])

  const retrieve = async () => {
    const response = await TimeTrackerService.retrieveUserInfo()
    setUser(response)
  }

  return (
    <div className="time-tracker-container">
      <Avatar img={img} status={user.workStatus} />
    </div>
  )
}

export default TimeTracker
