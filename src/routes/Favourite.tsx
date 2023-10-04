import Lottie from "lottie-react";
import {
  deleteStorageData,
  findPizzaItem,
  getLocalStorageData,
  storageDataType,
} from "../helper";
import { PizzaItem, pizzaCrusts } from "../pizza";
import { useEffect, useState } from "react";
import favPizzaAnimation from "../animation/fav_pizza.json";
import ShowPizza from "../components/ShowPizza";

const Favourite = () => {
  const [data, setData] = useState<Array<storageDataType>>([]);
  const [dataLength, setDataLength] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>("");

  const handelClickFavDelete = (id: string) => {
    const rawData = getLocalStorageData("favPizza");
    const storageData = JSON.parse(rawData);
    setDataLength(storageData.length);
    deleteStorageData("favPizza", id);
  };

  const handleClickFavPizza = (id: string): void => {
    setSelectedId(id);
  };

  useEffect(() => {
    const rawStorageData: string = getLocalStorageData("favPizza");
    setData(JSON.parse(rawStorageData));
    setSelectedId("");
  }, [dataLength]);

  return (
    <>
      {data.length > 0 ? (
        <>
          {selectedId && selectedId !== "" ? (
            <ShowPizza id={selectedId} data={data} />
          ) : (
            <p className="w-full bg-orange-500 sm-border ele-padding text-center mb-4 font-pt font-bold">
              Please select your favourite pizza to make order easily!
            </p>
          )}
          <div className="page-padding grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((d) => {
              const currentCrust = findPizzaItem<PizzaItem>(
                pizzaCrusts,
                d.obj.crust
              );
              return (
                <div
                  key={d.id}
                  className={`${
                    selectedId === d.id && "ring-4 ring-red-500"
                  } group cursor-pointer relative bg-slate-200 rounded-xl shadow-lg overflow-hidden  transit hover:shadow-none`}
                  onClick={() => handleClickFavPizza(d.id)}
                >
                  <div className="transit group-hover:ring-2 group-hover:ring-red-400 absolute bg-red-500 w-40 h-10 rotate-fav top-0 left-0">
                    <i className="relative fav-icon text-2xl text-orange-300 fa-solid fa-heart"></i>
                  </div>
                  <div
                    aria-label="delete favourite pizza"
                    title="delete"
                    className="cursor-pointer absolute right-3 top-1 rgba w-10 h-10 flex justify-center items-center rounded-lg hover:scale-95"
                    onClick={() => handelClickFavDelete(d.id)}
                  >
                    <i className="text-xl fa-solid fa-trash text-red-600 "></i>
                  </div>
                  <img
                    className="w-full h-[150px]"
                    src={currentCrust && currentCrust.img}
                  />
                  <h2 className="mx-4 my-2 font-pt text-lg font-bold">
                    <span className="text-orange-500"> {d.obj.crust}</span> with{" "}
                    <span className="text-orange-500"> {d.obj.topping}</span>
                  </h2>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-xl font-pt text-center font-bold mb-4">
            No favourite pizza yet!
          </h2>
          <Lottie
            className="w-[200px]"
            animationData={favPizzaAnimation}
            loop={true}
          />
        </div>
      )}
    </>
  );
};

export default Favourite;
