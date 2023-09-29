import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="page-padding flex items-center justify-between">
        <Link to="/" className="group text-2xl flex items-center gap-3">
          <i className="group-hover:text-red-600 transit fa-solid fa-pizza-slice"></i>
          <h1 className="font-bold font-lato">Pizza-Time</h1>
        </Link>
        <div>
          <Link
            aria-label="go to favourite page"
            to="/fav"
            className="sm-btn border-orange-500 "
          >
            <i className="fa-solid fa-heart"></i>{" "}
            <span className="text-lg">Fav</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
