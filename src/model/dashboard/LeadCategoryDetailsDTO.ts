import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface LeadCategoryDetailsDTO extends DashboardBaseDTO {
  category: string;
  totalLeadsCount: number;
  sharedLeadsCount: number | null;
  deliveredLeadsCount: number | null;
  rejectedLeadsCount: number | null;
  creditClaimedLeadsCount: number | null;
  acceptedLeadsCount: number | null;
  expiredLeadsCount: number | null;
}
