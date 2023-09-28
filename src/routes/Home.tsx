import Lottie from "lottie-react";
import LinkBtn from "../components/LinkBtn";
import main_animation from "../animation/main_animation.json";
const Home = () => {
  return (
    <div className="page">
      <h1 className="font-lato text-slate-800 font-extrabold text-5xl mb-4">
        Welcome To <span className="text-orange-500">Pizza-Time</span>
      </h1>
      <h3 className="font-pt font-bold text-2xl text-slate-600 mb-10">
        We would love you to bring Pizza for you
      </h3>
      <Lottie
        className="md:w-[600px]"
        animationData={main_animation}
        loop={true}
      />
      <LinkBtn route="crust" text="Start Order" />
    </div>
  );
};

export default Home;
