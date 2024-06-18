const prefix = "RX-PAGE-";

export default class LocalStorageUtils {
  private static set = (key: string, value: any) => {
    localStorage.setItem(key, value);
  };

  private static get = <T>(key: string) => {
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }
    return JSON.parse(value) as T;
  };

  private static remove = (key: string) => {
    localStorage.removeItem(key);
  };
}
