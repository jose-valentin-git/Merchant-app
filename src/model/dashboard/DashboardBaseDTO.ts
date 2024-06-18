import { DropDownSelectedDTO } from "./DropDownSelectedDTO";

export default interface DashboardBaseDTO {
  startDate: string | null;
  endDate: string | null;
  dashboardTime: DropDownSelectedDTO;
}
