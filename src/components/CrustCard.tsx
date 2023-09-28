import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
type CardProps = {
  name: string;
  description: string;
  img: string;
  price: number;
};

const Card = ({ name, img, price }: CardProps) => {
  const { state, dispatch } = useContext(PizzaContext);
  const { crust } = state;
  const handleClick = (n: string) => {
    dispatch({ type: "ADD_CRUST", payload: n });
  };
  return (
    <div
      onClick={() => handleClick(name)}
      className="card sm-border group relative "
    >
      <div className={`pizza-layer ${crust === name ? "flex" : "hidden"} `}>
        <i className="text-orange-600 text-9xl fa-solid fa-pizza-slice"></i>
      </div>
      <div className="overflow-hidden">
        <img
          className="w-full h-[250px] group-hover:scale-110 transit "
          src={img}
          alt={name}
        />
      </div>
      <div className="flex justify-start items-start flex-col p-4 gap-3">
        <h3 className="text-green-600 font-serif text-2xl lg:text-3xl font-extrabold">
          $ {price}
        </h3>
        <h3 className="transit group-hover:text-red-500 font-pt font-bold text-center text-xl lg:text-2xl">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Card;
