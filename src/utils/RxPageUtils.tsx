import { PartnerDTO } from "../model/PartnerDTO";
import { getRxTemplate } from "../services/RxTemplateService";
import RxPageInfoDTO from "../model/RxPageInfoDTO";

export const getRxPageInfo = async (book: number, page: number) => {
  return new Promise<RxPageInfoDTO>((resolve, reject) => {
    getRxTemplate(book, page)
      .then((res) => {
        const pageIpKey = `3.301.${book}.${page}`;
        const pageIp2RxPageInfoMap = res.pageIp2RxPageInfoMap;
        const value = pageIp2RxPageInfoMap[pageIpKey];
        resolve(value);
      })
      .catch((e) => reject(e));
  });
};

export const getPartnerInfo = async (): Promise<Map<
  number,
  PartnerDTO[]
> | null> => {
  return null;
};
