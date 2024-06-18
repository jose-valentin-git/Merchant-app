import { ActionFieldMapping } from "./ActionFieldMapping";
import { BaseDTO } from "./BaseDTO";

export interface RxPageDTO {
  url: string | null;
  actionFieldMap?: Map<number[], ActionFieldMapping> | null;
  pageOrder: number;
  templateImage: BaseDTO;
  actionFieldMapping: ActionFieldMapping[];
  templateHighResolutionImage?: BaseDTO;
}
