import { useContext } from "react";

import ToppingList from "../components/ToppingList";
import { pizzaToppings, pizzaCrusts, PizzaItem, ToppingItem } from "../pizza";
import { PizzaContext } from "../context/PizzaContext";
import LinkBtn from "../components/LinkBtn";
import { PopUpContext } from "../context/PopUpContext";
import { findPizzaItem } from "../helper";
const Topping = () => {
  const { state } = useContext(PizzaContext);
  const { popUp, setPopUp, quantity, setQuantity } = useContext(PopUpContext);
  const { crust, topping } = state;

  const currentCrust = findPizzaItem<PizzaItem>(pizzaCrusts, crust);
  const currentTopping = findPizzaItem<ToppingItem>(pizzaToppings, topping);

  const total = (currentCrust?.price + currentTopping?.price) * quantity;

  const handleClick = () => {
    popUp ? setPopUp(false) : setPopUp(true);
  };

  const handleClickQuantityInc = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleClickQuantityDec = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="page">
      <h2 className="font-lato text-slate-700 font-extrabold text-4xl mb-10">
        What kind of topping do you prefer for your{" "}
        <span className="text-orange-500">{crust}</span>?
      </h2>
      <div className="relative bg-orange-500 sm-border ele-padding flex justify-center items-center gap-4 mb-4">
        <span className="px-3 py-1 bg-red-500 rounded-full absolute -top-5 -right-4 text-base lg:text-lg font-bold">
          {quantity}
        </span>
        <img
          className="w-24 lg:w-32"
          src={currentCrust?.img}
          alt={currentCrust?.name}
        />
        <span className="text-3xl lg:text-5xl font-extrabold">+</span>
        <h3 className="text-lg lg:text-xl font-bold font-pt">
          {topping ? topping : "no topping"}
        </h3>
        <span className="text-3xl lg:text-5xl font-extrabold">=</span>
        <h3 className="text-xl font-bold font-serif">{total}</h3>
      </div>

      <div className="flex items-center gap-6">
        <button onClick={handleClickQuantityDec} className="sm-btn">
          <span className="text-3xl">-</span>
        </button>
        <h3 className="text-xl font-semibold">{quantity}</h3>
        <button onClick={handleClickQuantityInc} className="sm-btn">
          <span className="text-3xl">+</span>
        </button>
      </div>

      <h3 className="font-lato text-orange-500 font-bold text-2xl mb-10">
        {!topping
          ? "Please choose your desire topping for your pizza"
          : `${topping} topping on ${crust}`}
      </h3>
      <ToppingList pizza={pizzaToppings} />
      <div className="flex items-center gap-4">
        <LinkBtn route="/crust" text="Back to crust" />
        {crust && (
          <button onClick={handleClick} className="md-btn">
            Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Topping;
