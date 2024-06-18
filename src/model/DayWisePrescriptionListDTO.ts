import PrescriptionDTO from "./PrescriptionDTO";

export default interface DayWisePrescriptionListDTO {
  date: string;
  prescriptionDTOList: PrescriptionDTO[];
}
