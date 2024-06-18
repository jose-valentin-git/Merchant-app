export interface AssociateUserDTO {
  serverId: string;
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  activated: boolean;
  existingUser: boolean;
}
