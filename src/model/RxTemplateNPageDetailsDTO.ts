import RxPageInfoDTO from "./RxPageInfoDTO";
import { RxTemplateDTO } from "./RxTemplateDTO";

interface PageIp2RxPageInfoMap {
  [key: string]: RxPageInfoDTO;
}

export default interface RxTemplateNPageDetailsDTO {
  rxTemplateDTO: RxTemplateDTO;
  pageIp2RxPageInfoMap: PageIp2RxPageInfoMap;
}
``;
