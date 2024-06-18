import SpecialityDTO from "./SpecialityDTO";

export default interface HelpVideoDTO {
  serverId: string;
  active: boolean;
  title: string;
  duration: string;
  youtubeRefId: string;
  speciality: SpecialityDTO;
  orderBy: number;
  category: string;
  mediaRef: string;
  thumbMediaRef: string;
}
