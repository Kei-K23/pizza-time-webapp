import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PopUp from "../components/PopUp";
import { useContext } from "react";
import { PopUpContext } from "../context/PopUpContext";

const Main = () => {
  const { popUp } = useContext(PopUpContext);
  return (
    <div className="bg-slate-100 w-full min-h-screen relative">
      <Navbar />
      <Outlet />
      {popUp && <PopUp />}
    </div>
  );
};

export default Main;
