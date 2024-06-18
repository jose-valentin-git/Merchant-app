import axios from "axios";
import CookieUtils from "../utils/CookieUtils";

const BASE_URL = "http://test.wondrx.info/wondrx";
// const BASE_URL = "http://localhost:8080";
// const OAUTH_TOKEN = "Dsl9QaJyCcQQfkFLbpK5s0J_zho";

const getAPIClient = () => {
  const access_token = CookieUtils.getUserDetails()?.token;

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
export { getAPIClient };
