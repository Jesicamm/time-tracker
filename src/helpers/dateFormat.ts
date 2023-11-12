export const getHoursFromSeconds = (seconds: number): number => {
  return Math.floor(seconds / 3600)
}

export const getMinutesFromSeconds = (seconds: number): number => {
  return Math.floor((seconds % 3600) / 60)
}

export const getSeconds = (seconds: number): number => {
  return seconds % 60
}
