import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface PatientVisitIndexDTO extends DashboardBaseDTO {
  oneVisitCount: number;
  twoVisitCount: number;
  threeToFiveVisitCount: number;
  fiveToNineVisitCount: number;
  greaterThanTenVisitCount: number;
}
