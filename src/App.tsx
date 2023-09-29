import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./layout/Main";
import Curst from "./routes/Crust";
import Topping from "./routes/Topping";
import Order from "./routes/Order";
import ErrorPage from "./routes/ErrorPage";
import { PizzaContextProvider } from "./context/PizzaContext";
import { PopUpContextProvider } from "./context/PopUpContext";
import Favourite, { favouriteLoader } from "./routes/Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "crust",
        element: <Curst />,
      },
      {
        path: "topping",
        element: <Topping />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "fav",
        element: <Favourite />,
        loader: favouriteLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <PizzaContextProvider>
        <PopUpContextProvider>
          <RouterProvider router={router} />
        </PopUpContextProvider>
      </PizzaContextProvider>
    </>
  );
};

export default App;
