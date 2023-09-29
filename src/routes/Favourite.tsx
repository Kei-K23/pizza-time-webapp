import { useLoaderData } from "react-router-dom";
import { findPizzaItem, getLocalStorageData, storageDataType } from "../helper";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { PizzaItem, ToppingItem, pizzaCrusts, pizzaToppings } from "../pizza";

type StorageData = {
  storageData: string;
};

const Favourite = () => {
  //   const { state } = useContext(PizzaContext);
  //   const { crust } = state;

  const rawStorageData = useLoaderData();
  const storageData = rawStorageData as StorageData | undefined;
  const data: Array<storageDataType> = [];
  if (storageData) {
    data.push(...JSON.parse(storageData.storageData));
  } else {
    console.error(
      "Storage data is not available or does not match the expected type."
    );
  }

  return (
    <div className="page-padding">
      {data.map((d) => {
        const currentCrust = findPizzaItem<PizzaItem>(pizzaCrusts, d.obj.crust);
        return (
          <>
            <img src={currentCrust.img} />
            <h2>{d.obj.crust}</h2>
          </>
        );
      })}
    </div>
  );
};

export default Favourite;

export const favouriteLoader = () => {
  const storageData: string = getLocalStorageData("favPizza");
  return { storageData } as StorageData;
};
