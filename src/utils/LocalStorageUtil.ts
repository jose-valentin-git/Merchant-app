enum Key {
  RX_TEMPLATE = "RX_TEMPLATE",
}

class LocalStorageUtil {
  private static set = (key: Key, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  private static get = <T>(key: Key): T | undefined => {
    const valueAsString = localStorage.getItem(key);
    if (!valueAsString) return undefined;
    return JSON.parse(valueAsString) as T;
  };
}

export default LocalStorageUtil;
