import { useContext, useRef, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { PopUpContext } from "../context/PopUpContext";
import { PizzaItem, ToppingItem, pizzaCrusts, pizzaToppings } from "../pizza";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import {
  checkLocalStorageDataExist,
  findPizzaItem,
  setLocalStorageData,
  storageDataType,
} from "../helper";
const PopUp = () => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
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
    const value: storageDataType = {
      id: crypto.randomUUID(),
      obj: {
        crust,
        topping,
      },
    };
    setLocalStorageData("favPizza", value);
    if (btnRef.current) {
      btnRef.current.disabled = true;
    }
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
  let total = 0;
  if (currentCrust && currentTopping) {
    total = (currentCrust?.price + currentTopping?.price) * quantity;
  }

  return (
    <div className="popup-layer">
      {!isConfirm && (
        <div className="fixed center-x top-[20%] z-10 bg-slate-100 w-[90%] sm:w-[552px] ele-padding">
          <h2 className="text-2xl font-bold font-lato">
            Your ordering {quantity}{" "}
            <span className="text-orange-500">{crust}</span> with{" "}
            <span className="text-orange-500">{topping}</span>
          </h2>
          <h3 className="font-pt text-xl font-bold mt-4">
            Please confirm your order or cancel!
          </h3>
          <div className="mt-6 flex gap-6">
            <button
              className="sm-btn border-black hover-orange"
              onClick={handleClickConfirmOrder}
            >
              Confirm order
            </button>
            <button
              className="sm-btn border-black hover-red"
              onClick={handleClickCancelOrder}
            >
              Cancel order
            </button>
          </div>
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
            <button
              title="close"
              aria-label="close button"
              className="sm-btn border-black transit hover:scale-95"
              onClick={handleClick}
            >
              Close
            </button>
            <button
              title="download"
              aria-label="download the result"
              className="sm-btn border-black transit hover:scale-95"
              onClick={handleClickDownload}
            >
              <i className="fa-solid fa-download"></i> Download
            </button>
            <button
              ref={btnRef}
              disabled={
                checkLocalStorageDataExist("favPizza", crust, topping).id !== ""
                  ? true
                  : false
              }
              title="favourite"
              aria-label="add to favourite"
              className="disabled:scale-100 disabled:bg-orange-500 sm-btn border-black transit hover:scale-95"
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
