import { PizzaItem, ToppingItem, pizzaCrusts, pizzaToppings } from "../pizza";
import { findPizzaItem, storageDataType } from "../helper";
import { useContext, useState } from "react";
import IncDecBtnContainer from "./IncDecBtnContainer";
import { PopUpContext } from "../context/PopUpContext";
import { PizzaContext } from "../context/PizzaContext";

type ShowPizzaProp = {
  id: string;
  data: Array<storageDataType>;
};

const ShowPizza = ({ id, data }: ShowPizzaProp) => {
  let total = 0;
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(PizzaContext);
  const { popUp, setPopUp } = useContext(PopUpContext);

  const selectedItem = data.find((d) => d.id === id) ?? {
    id: "",
    obj: { crust: "", topping: "" },
  };
  const { crust, topping } = selectedItem.obj;
  const currentCrust = findPizzaItem<PizzaItem>(pizzaCrusts, crust);
  const currentTopping = findPizzaItem<ToppingItem>(pizzaToppings, topping);

  if (currentCrust && currentTopping) {
    total = (currentCrust?.price + currentTopping?.price) * quantity;
  }

  const handleClickQuantityInc = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleClickQuantityDec = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  const handleClick = () => {
    if (currentCrust && currentTopping) {
      dispatch({ type: "ADD_CRUST", payload: currentCrust.name });
      dispatch({ type: "ADD_TOPPINGS", payload: currentTopping.name });
      dispatch({ type: "INC_QUANTITY", payload: quantity });
      popUp ? setPopUp(false) : setPopUp(true);
    }
  };

  return (
    <div className="my-8 flex justify-center items-center flex-col">
      <div className="w-[90%] relative bg-orange-500 sm-border ele-padding flex justify-center items-center gap-4 mb-4">
        {id && (
          <>
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
          </>
        )}
      </div>

      {id !== "" && (
        <>
          <IncDecBtnContainer
            selectedId={id}
            handleClickQuantityDec={handleClickQuantityDec}
            handleClickQuantityInc={handleClickQuantityInc}
            quantity={quantity}
          />

          <button
            disabled={id === "" ? true : false}
            onClick={handleClick}
            className="disabled:bg-slate-200 disabled:hover:scale-100 md-btn transit hover:scale-95 border-black"
          >
            Order
          </button>
        </>
      )}
    </div>
  );
};

export default ShowPizza;
