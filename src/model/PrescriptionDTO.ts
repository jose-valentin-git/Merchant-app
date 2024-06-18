export default interface PrescriptionDTO {
  ptpId: string;
  ptpImageId: number;
  thumbnailURL: string;
  startTime: Date | string;
  endTime: Date | string;
  mobileNumber: string;
  patientName: string;
  audioAvailable: boolean;
  videoAvailable: boolean;
  leadShared: boolean;
  imagesAvailable: boolean;
}
