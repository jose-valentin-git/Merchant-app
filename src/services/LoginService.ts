import LoginDetails from "../model/LoginDetails";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getLoginDetails = (login: string) => {
  return new Promise<LoginDetails>((resolve, reject) => {
    getAPIClient()
      .get<LoginDetails>(`${API_ENDPOINT.loginDetails}`, {
        params: {
          login,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
};

export { getLoginDetails };
