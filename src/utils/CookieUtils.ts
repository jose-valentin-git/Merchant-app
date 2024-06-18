import Cookies from "js-cookie";
import SessionDetails from "../model/SessionDetails";

enum CookieEnum {
  ACCESS = "access",
  MARKED_CLINIC = "clinic",
  DASHBOARD_BANNER = "dashboardBanner",
}

class CookieUtils {
  private static set = <T>(key: CookieEnum, value: T) => {
    // set cookie expiration time to next day at 2 AM
    const expireIn = new Date();
    expireIn.setDate(expireIn.getDate() + 1);
    expireIn.setHours(2);
    Cookies.set(key, JSON.stringify(value), { expires: expireIn });
  };

  private static get = <T>(key: CookieEnum): T | undefined => {
    const dataAsString = Cookies.get(key);
    if (!dataAsString) return undefined;
    return JSON.parse(dataAsString) as T;
  };

  static getUserDetails = () => {
    return this.get<SessionDetails>(CookieEnum.ACCESS);
  };

  static setUserDetails = (data: SessionDetails) => {
    this.set<SessionDetails>(CookieEnum.ACCESS, data);
  };

  static getMarkedClinic = () => {
    return this.get<string>(CookieEnum.MARKED_CLINIC);
  };

  static setMarkedClinic = (serverId: string) => {
    this.set<string>(CookieEnum.MARKED_CLINIC, serverId);
  };

  static setDashboardBannerVisible = (show: boolean) => {
    this.set<boolean>(CookieEnum.DASHBOARD_BANNER, show);
  };

  static getDashboardBanner = () => {
    return this.get<boolean>(CookieEnum.DASHBOARD_BANNER);
  };

  static clearAll = () => {
    Object.values(CookieEnum).forEach((v) => {
      Cookies.remove(v);
    });
  };
}

export default CookieUtils;
