import HelpVideoDTO from "../model/HelpVideoDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getHelpVideos = (): Promise<HelpVideoDTO[]> => {
  return new Promise<HelpVideoDTO[]>((resolve, reject) => {
    getAPIClient()
      .get<HelpVideoDTO[]>(`${API_ENDPOINT.helpVideos}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
export default getHelpVideos;
