import { useContext } from "react";
import { PizzaToppingsType } from "../pizza";
import ToppingCard from "./ToppingCard";
import { PizzaContext } from "../context/PizzaContext";

type toppingListsProps = {
  pizza: PizzaToppingsType;
};

const ToppingList = ({ pizza }: toppingListsProps) => {
  const toppings: PizzaToppingsType = [];
  const { state } = useContext(PizzaContext);
  const { crust } = state;
  const uniqueToppings = new Set();

  pizza.filter((i) => {
    i.crustType.map((type) => {
      if (type.toLowerCase() === crust.toLowerCase()) {
        if (!uniqueToppings.has(i.name)) {
          uniqueToppings.add(i.name);
          toppings.push(i);
        }
      }
    });
  });

  return (
    <div className="card-grid ">
      {toppings.map((item, index) => (
        <ToppingCard
          key={index}
          name={item?.name}
          price={item?.price}
          description={item?.description}
        />
      ))}
    </div>
  );
};

export default ToppingList;
