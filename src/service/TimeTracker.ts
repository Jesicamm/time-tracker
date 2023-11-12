import axios from "axios"
import { UserInfo, WorkStatus } from "../types/TimeTracker"
import { emptyUserInfo } from "../constants/emptyTimeTracker"

type JSONRecord = Record<string, unknown>
export class TimeTracker {
  private static token: string = "16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f"
  private static baseUrl: string = "https://api-test.sesametime.com/schedule/v1/work-entries"
  private static options = {
    "Content-Type": "application/json",
    headers: { Authorization: `Bearer ${this.token}` },
  }

  public static async retrieveUserInfo(): Promise<UserInfo> {
    let result: UserInfo
    try {
      const response = await axios.get(this.baseUrl, this.options)
      result = this.buildUserInfo(response.data.data[0] as JSONRecord)
    } catch {
      result = emptyUserInfo
    }

    return result
  }

  public static async clockOut(id: string): Promise<UserInfo> {
    const url = `${this.baseUrl}/clock-out`
    const data = this.buildClockData(id)
    let result: UserInfo
    try {
      const response = await axios.post(url, data, this.options)
      result = this.buildUserInfo(response.data.data)
    } catch {
      result = emptyUserInfo
    }

    return result
  }

  public static async clockIn(id: string): Promise<UserInfo> {
    const url = `${this.baseUrl}/clock-in`
    const data = this.buildClockData(id)
    let result: UserInfo
    try {
      const response = await axios.post(url, data, this.options)
      result = this.buildUserInfo(response.data.data)
    } catch {
      result = emptyUserInfo
    }

    return result
  }

  private static buildUserInfo(data: JSONRecord): UserInfo {
    const employee = data.employee as JSONRecord
    const workEntryIn = data.workEntryIn as JSONRecord

    const result = {
      ...emptyUserInfo,
      id: String(employee.id),
      workStatus: employee.workStatus as WorkStatus,
      firstName: String(employee.firstName),
      lastName: String(employee.lastName),
      workEntryIn: workEntryIn.date as Date,
      workedSeconds: Number(data.workedSeconds),
    }

    return result
  }

  private static buildClockData(id: string) {
    const data = {
      employeeId: id,
      "workEntryIn / workEntryOut": {
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      },
    }
    return data
  }
}
