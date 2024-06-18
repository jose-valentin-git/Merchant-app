import { AssociateUserDTO } from "./AssociateUserDTO";

export interface AssociateDTO {
  serverId: string;
  active: boolean;
  firstName: string;
  lastName: string;
  displayName: string;
  mobileNumber: string;
  user: AssociateUserDTO;
}
