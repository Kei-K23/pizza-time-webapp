import { PizzaItem, ToppingItem } from "./pizza";
type storagePizzaType = {
  crust: string;
  topping: string;
};

export type storageDataType = {
  id: string;
  obj: storagePizzaType;
};

export const findPizzaItem = <T extends PizzaItem | ToppingItem>(
  items: T[],
  name: string
): T | undefined => {
  const item = items.find((item) => item.name === name);
  if (item) {
    return item;
  }
  return;
};

export function checkLocalStorageDataExist(
  key: string,
  c: string,
  t: string
): storageDataType {
  const storageData = getLocalStorageData(key);
  if (storageData === "") {
    return {
      id: "",
      obj: {
        crust: "",
        topping: "",
      },
    };
  }
  const data: Array<storageDataType> = JSON.parse(storageData);
  if (data.length > 0) {
    const found =
      data.find((d) => d.obj.crust === c && d.obj.topping === t) || false;
    if (found) {
      return found;
    } else {
      return {
        id: "",
        obj: {
          crust: "",
          topping: "",
        },
      };
    }
  } else {
    return {
      id: "",
      obj: {
        crust: "",
        topping: "",
      },
    };
  }
}

export function getLocalStorageData(key: string): string {
  return localStorage.getItem(key) || "";
}

export function setLocalStorageData(key: string, value: storageDataType): void {
  const { obj, id } = value;
  const storageData = checkLocalStorageDataExist(key, obj.crust, obj.topping);

  if (storageData.id === id) {
    return;
  } else {
    const rawStorageData: string = getLocalStorageData(key);
    if (rawStorageData === "") {
      const newArray: Array<storageDataType> = [
        {
          id,
          obj,
        },
      ];
      localStorage.setItem(key, JSON.stringify(newArray));
    } else {
      const storageData = JSON.parse(rawStorageData);
      storageData.push(value);
      localStorage.setItem(key, JSON.stringify(storageData));
    }
  }
}

export function deleteStorageData(key: string, id: string) {
  const rawStorageData: string = getLocalStorageData(key);
  let storageData: Array<storageDataType> = JSON.parse(rawStorageData);
  localStorage.setItem(key, JSON.stringify([]));
  storageData = storageData.filter((data) => data.id !== id);

  storageData.map((data) => {
    setLocalStorageData(key, data);
  });
}
