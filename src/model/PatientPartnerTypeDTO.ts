export interface PatientPartnerTypeDTO {
  id: number;
  name: string;
  typeCode: string;
  sortNumber: number;
  serviceIcon: string;
  displayName: string;
  displayNameFormatted: string;
  vaccinationEnabled: boolean;
  econsultEnabled: boolean;
}
