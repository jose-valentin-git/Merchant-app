import { DateOfBirth } from "./DateOfBirth";
import EnumMasterDTO from "./EnumMasterDTO";
import MediaDTO from "./MediaDTO";
import SpecialityDTO from "./SpecialityDTO";
import UserDTO from "./UserDTO";

export default interface DoctorDTO {
  serverId: string;
  active: boolean;
  firstName: string;
  lastName: string;
  displayName: string;
  licenseNumber: string;
  profilePicture: MediaDTO;
  user: UserDTO;
  gender: EnumMasterDTO;
  speciality: SpecialityDTO;
  degree: string;
  alternatePhone: string;
  secondaryEmail: string;
  landLine: string;
  mobileNumber: string;
  practiceStartedOn: number;
  dateOfBirth: DateOfBirth;
}
