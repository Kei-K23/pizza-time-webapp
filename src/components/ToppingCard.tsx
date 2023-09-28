import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

type pizzaToppingsProps = {
  name: string;
  description: string;
  price: number;
};

const ToppingCard = ({ name, description, price }: pizzaToppingsProps) => {
  const { state, dispatch } = useContext(PizzaContext);
  const { topping } = state;
  const handleClick = (n: string) => {
    dispatch({ type: "ADD_TOPPINGS", payload: n });
  };

  return (
    <div
      onClick={() => handleClick(name)}
      className="group card sm-border group relative"
    >
      <div className={`pizza-layer ${topping === name ? "flex" : "hidden"} `}>
        <i className="text-orange-600 text-4xl fa-solid fa-pizza-slice"></i>
      </div>
      <div className="flex items-center gap-4 mx-4 my-3">
        <h3 className="group-hover:text-orange-600 transit font-pt font-bold text-center text-xl lg:text-2xl">
          {name}
        </h3>
        <h3 className="text-xl font-extrabold text-green-600">$ {price}</h3>
      </div>
      <p className="font-pt font-bold text-lg lg:text-xl mx-4 mb-2">
        {description}
      </p>
    </div>
  );
};

export default ToppingCard;
