import React, { useEffect, useState } from "react"
import { WorkStatus } from "../../../types/TimeTracker"
import { useTimeCounter } from "../../../hooks/useInterval"
import { getHoursFromSeconds, getMinutesFromSeconds, getSeconds } from "../../../helpers/dateFormat"

interface CounterProps {
  status: WorkStatus
  workedSeconds: number
  rawDate?: Date
}

const Counter: React.FC<CounterProps> = ({ status, workedSeconds, rawDate }) => {
  const totalWorkHours: string = "08:00:00"
  const intervalRange: number = 1000

  const [isRunning, setIsRunning] = useState(false)
  const { time, setInitialTime } = useTimeCounter(isRunning, intervalRange)

  useEffect(() => {
    const milliseconds = new Date(rawDate!).getTime()
    setInitialTime(milliseconds)
  }, [rawDate])

  useEffect(() => {
    const isRunning = handleStatus()
    setIsRunning(isRunning)
  }, [status])

  const handleStatus = () => {
    const statusMap = {
      online: true,
      offline: false,
      paused: false,
      "": false,
    }
    return statusMap[status]
  }

  const getTime = (time: number) => {
    const result = {
      hours: getHoursFromSeconds(time),
      minutes: getMinutesFromSeconds(time),
      seconds: getSeconds(time),
    }

    return result
  }

  const timeData = status == "offline" ? getTime(workedSeconds) : getTime(time)

  if (!status) return
  return (
    <div className="flex flex-row gap-x-1.5 text-xs text-darkGrey">
      <p className="font-semibold">
        {timeData.hours.toString().padStart(2, "0")}:{timeData.minutes.toString().padStart(2, "0")}:
        {timeData.seconds.toString().padStart(2, "0")}
      </p>
      {status == "online" && (
        <>
          <p>/</p>
          <p>{totalWorkHours}</p>
        </>
      )}
    </div>
  )
}

export default Counter
