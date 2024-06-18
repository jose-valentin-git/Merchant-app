import { AddressDTO } from "./AddressDTO";
import { DoctorServerIdDTO } from "./DoctorServerIdDTO";
import { TypeDTO } from "./TypeDTO";

export interface ClinicDTO {
  serverId?: string;
  active: boolean;
  name: string;
  isPrimaryClinic: boolean;
  address: AddressDTO;
  type?: TypeDTO;
  doctor?: DoctorServerIdDTO;
  about: string;
  contactNumber: string;
  panNumber?: string;
  gstin?: string;
  tanNumber?: string;
}
