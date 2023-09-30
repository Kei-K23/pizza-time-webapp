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
            className="transit sm-btn lg:md-btn border-orange-500 hover:bg-orange-500"
          >
            <i className="fa-solid fa-heart"></i>{" "}
            <span className="text-lg">Fav</span>
          </Link>
          <a
            title="follow the link"
            className="group ml-6 text-lg"
            href="https://github.com/Kei-K23"
            target="_blank"
          >
            <i className="group-hover:text-blue-500 transit fa-brands fa-github"></i>{" "}
            Kei-K
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
