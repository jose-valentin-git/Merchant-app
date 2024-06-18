import DashBoardData from "../model/dashboard/DashBoardData";
import { DropDownSelectedDTO } from "../model/dashboard/DropDownSelectedDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";
import DateUtils from "../utils/formatDate";
const getDashboardDetails = (
  doctorId: string,
  startDate: string | null,
  endDate: null | string,
  filterType?: DropDownSelectedDTO
): Promise<DashBoardData> => {
  return new Promise<DashBoardData>((resolve, reject) => {
    const endPoint = API_ENDPOINT.dashboard;
    getAPIClient()
      .get<DashBoardData>(`${endPoint}`, {
        params: {
          doctorId: doctorId,
          startDate: DateUtils.formatDate(startDate),
          endDate: DateUtils.formatDate(endDate),
          filterType,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export { getDashboardDetails };
