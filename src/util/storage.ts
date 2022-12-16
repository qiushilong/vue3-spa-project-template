interface IStorageOptions {
  type?: "local" | "session";
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
export function setItem(key: string, value: any, options?: IStorageOptions) {
  const storage = options?.type === "session" ? sessionStorage : localStorage;

  try {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
  } catch (error) {
    value = "";
    console.error(error);
  }

  storage.setItem(key, value ?? "");
}

export function getItem(key: string, options?: IStorageOptions) {
  const storage = options?.type === "session" ? sessionStorage : localStorage;
  return storage.getItem(key) || "";
}
