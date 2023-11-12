export const getMilliseconds = (aDate: Date): number => {
  const date = new Date(aDate)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000
  return milliseconds
}

export const getHoursInMilliseconds = (milliseconds: number): number => {
  return Math.floor(milliseconds / 3600)
}

export const getMinutesInMilliSeconds = (milliseconds: number): number => {
  return Math.floor((milliseconds % 3600) / 60)
}

export const getSecondsInMilliSeconds = (milliseconds: number): number => {
  return milliseconds % 60
}
