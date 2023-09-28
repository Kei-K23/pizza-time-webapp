import { useContext } from "react";
import LinkBtn from "../components/LinkBtn.tsx";
import CurstList from "../components/CurstList.tsx";
import { pizzaCrusts } from "../pizza.ts";
import { PizzaContext } from "../context/PizzaContext.tsx";
const Crust = () => {
  const { state } = useContext(PizzaContext);
  const { crust } = state;
  return (
    <div className="page">
      <h2 className="font-lato text-slate-700 font-extrabold text-4xl mb-10">
        What do you prefer for your Pizza Crusts?
      </h2>
      <h3 className="font-lato text-orange-500 font-bold text-2xl mb-10">
        {crust ? `You chose ${crust}` : "Please choose your desire crusts"}
      </h3>
      <CurstList pizza={pizzaCrusts} />
      {crust && <LinkBtn route="/topping" text="Toppings" />}
    </div>
  );
};

export default Crust;
