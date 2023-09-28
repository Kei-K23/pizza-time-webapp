import React, { createContext, useReducer } from "react";

type INIT_STATEType = {
  crust: string;
  topping: string;
};

type actionType = {
  type: "ADD_CRUST" | "ADD_TOPPINGS";
  payload: string;
};

const INIT_STATE: INIT_STATEType = {
  crust: "",
  topping: "",
};

const pizzaReducer = (
  state: INIT_STATEType,
  action: actionType
): INIT_STATEType => {
  switch (action.type) {
    case "ADD_CRUST":
      return {
        ...state,
        crust: action.payload,
      };
    case "ADD_TOPPINGS":
      return {
        ...state,
        topping: action.payload,
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
