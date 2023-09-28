import React, { createContext, useState } from "react";

export const PopUpContext = createContext<{
  popUp: boolean;
  quantity: number;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}>({
  popUp: false,
  quantity: 1,
  setPopUp: () => {},
  setQuantity: () => {},
});

export const PopUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp, quantity, setQuantity }}>
      {children}
    </PopUpContext.Provider>
  );
};
