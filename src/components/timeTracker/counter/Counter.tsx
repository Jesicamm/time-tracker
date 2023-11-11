import React, { useEffect, useState } from "react"
import { WorkStatus } from "../../../types/TimeTracker"

interface CounterProps {
  rawDate?: Date
  status: WorkStatus
}

const Counter: React.FC<CounterProps> = ({ rawDate, status }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTotal] = useState(0)

  useEffect(() => {
    if (rawDate) {
      const milliseconds = retrieveInMilliseconds()
      setTotal(Math.floor(milliseconds / 1000))
    }
  }, [rawDate])

  useEffect(() => {
    const isRunning = handleStatus()
    setIsRunning(isRunning)
  }, [status])

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isRunning) {
      intervalId = setInterval(() => {
        setTotal((prevTotal) => prevTotal + 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  const handleStatus = () => {
    const statusMap = {
      online: true,
      offline: false,
      paused: false,
      "": false,
    }
    return statusMap[status]
  }

  const retrieveInMilliseconds = () => {
    const date = new Date(rawDate!)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000
    return milliseconds
  }

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return (
    <div className="stopwatch-container text-sm text-darkGrey font-semibold">
      <p className="stopwatch-time">
        {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  )
}

export default Counter
