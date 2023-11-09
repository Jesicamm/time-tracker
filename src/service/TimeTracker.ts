import axios from "axios"
import { UserInfo, WorkStatus, emptyUserInfo } from "../types/TimeTracker"

type JSONRecord = Record<string, unknown>
export class TimeTracker {
  private static token: string = "16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f"
  private static baseUrl: string = "https://api-test.sesametime.com/schedule/v1/work-entries"
  private static config = {
    "Content-Type": "application/json;charset=UTF-8",
    headers: { Authorization: `Bearer ${this.token}` },
  }

  public static async retrieveUserInfo(): Promise<UserInfo> {
    let result: UserInfo
    try {
      const response = await axios.get(this.baseUrl, this.config)
      result = this.buildUserInfo(response.data.data[0] as JSONRecord)
    } catch {
      result = emptyUserInfo
    }

    return result
  }

  public static async clockOut(id: string): Promise<WorkStatus> {
    const url = `${this.baseUrl}/clock-out`
    const data = this.buildClockData(id)
    let result: WorkStatus
    try {
      const response = await axios.post(url, data, this.config)
      result = response.data.data.employee.workStatus
    } catch {
      result = ""
    }

    return result
  }

  public static async clockIn(id: string): Promise<WorkStatus> {
    const url = `${this.baseUrl}/clock-in`
    const data = this.buildClockData(id)
    let result: WorkStatus
    try {
      const response = await axios.post(url, data, this.config)
      result = response.data.data.employee.workStatus
    } catch {
      result = ""
    }

    return result
  }

  private static buildUserInfo(data: JSONRecord): UserInfo {
    const employee = data.employee as JSONRecord
    const workEntryIn = data.workEntryIn as JSONRecord

    return {
      id: String(employee.id),
      workStatus: employee.workStatus as WorkStatus,
      firstName: String(employee.firstName),
      lastName: String(employee.lastName),
      workEntryIn: workEntryIn.date as Date,
    }
  }

  private static buildClockData(id: string) {
    const data = {
      employeeId: id,
      workEntryOut: {
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      },
    }
    return data
  }
}
