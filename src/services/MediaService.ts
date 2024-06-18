import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getTemporyURL = (mediaId?: number | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!!!mediaId) return "";
    console.log("downloading mediaId --- ", mediaId);

    getAPIClient()
      .get<string>(`${API_ENDPOINT.downloadMedia}/${mediaId}`)
      .then((res) => {
        console.log("donwloaded media URL -- ", mediaId, "--", res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getTemporyURL };
