import { ActionFieldMapping } from "./ActionFieldMapping";

export default interface RxPageInfoDTO {
  rxPageId: number;
  pageIndex: number;
  latestPageMediaId: number;
  imageUrl: string;
  pageIpKey: string;
  actionFieldMapping: ActionFieldMapping[];
}
