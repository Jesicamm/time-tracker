import { useEffect, useState } from "react"

export const useTimeCounter = (isRunning: boolean, rangeTime: number) => {
  const [time, setTime] = useState<number>(0)
  const [initialTime, setInitialTime] = useState<number>(0)

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    const milliSecondsPassed: number = Date.now() - initialTime
    setTime(Math.floor(milliSecondsPassed / 1000))
    if (isRunning) {
      intervalId = setInterval(() => {
        const milliSecondsPassed: number = Date.now() - initialTime
        setTime(Math.floor(milliSecondsPassed / 1000))
      }, rangeTime)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  return {
    time,
    setInitialTime,
    setTime,
  }
}
