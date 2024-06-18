import { LeadSharedDTO } from "./LeadSharedDTO";

export default interface PrescriptionDetailsDTO {
  ptpId: string;
  patientName: string;
  mobileNumber: string;
  startTime: string;
  endTime: string;
  nextVisitDate?: string | null;
  age?: number | null;
  gender?: string | null;
  videosList?: string[] | null;
  clickedImagesList?: string[] | null;
  leadSharedList?: LeadSharedDTO[] | null;
  audioUrl?: string | null;
  ptpImageId: number;
  ptpImageUrl: string;
}
