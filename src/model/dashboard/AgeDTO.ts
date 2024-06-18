import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface AgeDTO extends DashboardBaseDTO {
  oneToTenCount: number | null;
  elevenToEighteenCount: number | null;
  nineteenToFourthCount: number | null;
  fortyOneToSixthCount: number | null;
  greaterThanSixtyCount: number | null;
}
