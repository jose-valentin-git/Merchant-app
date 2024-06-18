import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface FollowUpConversionDTO extends DashboardBaseDTO {
  followUpSentCount: number;
  followUpFulfilledCount: number;
}
