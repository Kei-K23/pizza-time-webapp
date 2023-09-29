import React, { createContext, useReducer } from "react";

type INIT_STATEType = {
  crust: string;
  topping: string;
  quantity: number;
};

type actionType = {
  type: "ADD_CRUST" | "ADD_TOPPINGS" | "INC_QUANTITY" | "DEC_QUANTITY";
  payload: string | number;
};

const INIT_STATE: INIT_STATEType = {
  crust: "",
  topping: "",
  quantity: 1,
};

const pizzaReducer = (
  state: INIT_STATEType,
  action: actionType
): INIT_STATEType => {
  switch (action.type) {
    case "ADD_CRUST":
      return {
        ...state,
        crust: action.payload as string,
      };
    case "ADD_TOPPINGS":
      return {
        ...state,
        topping: action.payload as string,
      };
    case "INC_QUANTITY":
      return {
        ...state,
        quantity: action.payload as number,
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        quantity: action.payload as number,
      };
    default:
      return state;
  }
};

export const PizzaContext = createContext<{
  state: INIT_STATEType;
  dispatch: React.Dispatch<actionType>;
}>({
  state: INIT_STATE,
  dispatch: () => {},
});

export const PizzaContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(pizzaReducer, INIT_STATE);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};
