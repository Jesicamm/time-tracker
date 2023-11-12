import React, { useEffect, useState } from "react"
import { WorkStatus } from "../../../types/TimeTracker"
import { useTimeCounter } from "../../../hooks/useInterval"
import {
  getHoursInMilliseconds,
  getMilliseconds,
  getMinutesInMilliSeconds,
  getSecondsInMilliSeconds,
} from "../../../helpers/dateFormat"

interface CounterProps {
  status: WorkStatus
  rawDate?: Date
}

const Counter: React.FC<CounterProps> = ({ status, rawDate }) => {
  const totalWorkHours: string = "08:00:00"
  const intervalRange: number = 1000

  const [isRunning, setIsRunning] = useState(false)
  const { time, setInitialTime } = useTimeCounter(isRunning, intervalRange)

  useEffect(() => {
    if (rawDate) {
      const milliseconds = getMilliseconds(rawDate)
      setInitialTime(milliseconds)
    }
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

  const hours = getHoursInMilliseconds(time)
  const minutes = getMinutesInMilliSeconds(time)
  const seconds = getSecondsInMilliSeconds(time)

  return (
    <div className="flex flex-row gap-x-1.5 text-xs text-darkGrey">
      <p className="font-semibold">
        {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
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
