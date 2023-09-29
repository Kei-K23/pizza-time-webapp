import { useContext, useRef, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { PopUpContext } from "../context/PopUpContext";
import { PizzaItem, ToppingItem, pizzaCrusts, pizzaToppings } from "../pizza";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { findPizzaItem } from "../helper";
const PopUp = () => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const { state, dispatch } = useContext(PizzaContext);
  const { setPopUp } = useContext(PopUpContext);
  const { crust, topping, quantity } = state;
  const navigate = useNavigate();
  const downloadEleRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setPopUp(false);
    dispatch({ type: "ADD_CRUST", payload: "" });
    dispatch({ type: "ADD_TOPPINGS", payload: "" });
    dispatch({ type: "INC_QUANTITY", payload: 1 });
    navigate("/");
  };

  const handleClickDownload = () => {
    if (downloadEleRef.current) {
      html2canvas(downloadEleRef?.current).then((canvas) => {
        const base64Img = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.setAttribute("href", base64Img);
        a.setAttribute("download", "img.png");
        a.click();
        a.remove();
      });
    }
  };

  const handleClickFavourite = () => {
    console.log("favourite");
  };

  const handleClickConfirmOrder = () => {
    setIsConfirm(true);
  };

  const handleClickCancelOrder = () => {
    setPopUp(false);
    setIsConfirm(false);
  };

  const currentCrust = findPizzaItem<PizzaItem>(pizzaCrusts, crust);

  const currentTopping = findPizzaItem<ToppingItem>(pizzaToppings, topping);
  const total = (currentCrust?.price + currentTopping?.price) * quantity;

  return (
    <div className="popup-layer">
      {!isConfirm && (
        <div>
          <button onClick={handleClickConfirmOrder}>Confirm order</button>
          <button onClick={handleClickCancelOrder}>Cancel order</button>
        </div>
      )}

      {isConfirm && (
        <div
          ref={downloadEleRef}
          className="fixed center-x top-[20%] z-10 bg-slate-100 w-[90%] sm:w-[552px] ele-padding"
        >
          <h1 className="font-bold font-lato text-center text-2xl underline mb-3">
            <i className="text-red-600 transit fa-solid fa-pizza-slice"></i>{" "}
            Pizza-Time
          </h1>
          <h2 className="text-center text-orange-600 text-xl font-pt font-bold mb-3">
            Thank you so much for ordering our pizza
          </h2>
          <h2 className="text-lg ">
            Curst type: <span className="font-bold">{crust}</span>{" "}
            <span className="text-green-600 font-bold">
              ${currentCrust?.price}
            </span>
          </h2>
          <h2 className="text-lg">
            Topping type: <span className="font-bold">{topping}</span>{" "}
            <span className="text-green-600 font-bold">
              ${currentTopping?.price}
            </span>
          </h2>
          <h2 className="text-lg">
            Quantity: <span className="font-bold ">{quantity}</span>
          </h2>
          <h2 className="text-lg">
            Total: <span className="font-bold text-green-600">${total}</span>
          </h2>
          <p className="text-base my-4 font-bold font-pt">
            You successfully ordered {crust} with {topping}
          </p>
          <div className="flex items-center gap-4">
            <button className="sm-btn border-black" onClick={handleClick}>
              Close
            </button>
            <button
              className="sm-btn border-black"
              onClick={handleClickDownload}
            >
              <i className="fa-solid fa-download"></i> Download
            </button>
            <button
              className="sm-btn border-black"
              onClick={handleClickFavourite}
            >
              <i className="fa-solid fa-heart"></i> Favourite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
