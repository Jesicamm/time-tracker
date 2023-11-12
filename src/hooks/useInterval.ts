import { useEffect, useState } from "react"

export const useTimeCounter = (isRunning: boolean, rangeTime: number) => {
  const [time, setTime] = useState(0)

  const setInitialTime = (milliseconds: number) => {
    setTime(Math.floor(milliseconds / 1000))
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTotal) => prevTotal + 1)
      }, rangeTime)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  return {
    time,
    setInitialTime,
  }
}
