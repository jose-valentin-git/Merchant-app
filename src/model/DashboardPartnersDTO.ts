import { ActiveDTO } from "./ActiveDTO";
import { InvitedDTO } from "./InvitedDTO";

export interface DashboardPartnersDTO {
  invitedList: InvitedDTO[];
  activeList: ActiveDTO[];
  inActiveList: ActiveDTO[];
}
