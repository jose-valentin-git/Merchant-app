import { BaseDTO } from "./BaseDTO";
import { RxPageDTO } from "./RxPageDTO";

export interface RxTemplateDTO {
  rxPage: RxPageDTO[];
  pageCount: number;
  templatePDF: BaseDTO;
}
