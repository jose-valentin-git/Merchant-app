import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface GenderPercentageCountDTO extends DashboardBaseDTO {
  gender: "UNDISCLOSED" | "MALE" | "FEMALE";
  percentage: number;
  count: number;
}
