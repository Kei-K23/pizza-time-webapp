import React, { createContext, useState } from "react";

export const PopUpContext = createContext<{
  popUp: boolean;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  popUp: false,
  setPopUp: () => {},
});

export const PopUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
};
