import RxTemplateNPageDetailsDTO from "../model/RxTemplateNPageDetailsDTO";
import CookieUtils from "../utils/CookieUtils";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getRxTemplate = (bookNo: number, pageNo: number) => {
  return new Promise<RxTemplateNPageDetailsDTO>((resolve, reject) => {
    const user = CookieUtils.getUserDetails()!;
    getAPIClient()
      .get<RxTemplateNPageDetailsDTO>(API_ENDPOINT.rxTemplate, {
        params: {
          doctorId: user.doctorId,
          bookNo,
          pageNo,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
};

export { getRxTemplate };
