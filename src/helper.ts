import { PizzaItem, ToppingItem } from "./pizza";
type storagePizzaType = {
  crust: string;
  topping: string;
};

export type storageDataType = {
  id: string;
  obj: storagePizzaType;
};

const storageArray: Array<storageDataType> = [];

export const findPizzaItem = <T extends PizzaItem | ToppingItem>(
  items: T[],
  name: string
): T => {
  const item = items.find((item) => item.name === name);
  if (item) {
    return item;
  }
  return (items[0] as T) || ({} as T);
};

export function checkLocalStorageDataExist(
  key: string,
  c: string,
  t: string
): storageDataType | boolean {
  const storageData = getLocalStorageData(key);
  if (storageData === "") return false;
  const data: Array<storageDataType> = JSON.parse(storageData);
  if (data.length > 0) {
    const found =
      data.find((d) => d.obj.crust === c && d.obj.topping === t) || false;
    if (found) {
      return found;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function getLocalStorageData(key: string): string {
  return localStorage.getItem(key) || "";
}

export function setLocalStorageData(key: string, value: storageDataType): void {
  const { obj } = value;
  const storageData = checkLocalStorageDataExist(key, obj.crust, obj.topping);

  if (storageData) {
    return;
  }
  storageArray.push(value);
  localStorage.setItem(key, JSON.stringify(storageArray));
}

setLocalStorageData("test", {
  id: "1",
  obj: {
    crust: "c",
    topping: "t",
  },
});
