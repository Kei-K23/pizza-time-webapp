import { PizzaItem, ToppingItem } from "./pizza";

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
