import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="page-padding">
        <Link to="/" className="group text-2xl flex items-center gap-3">
          <i className="group-hover:text-red-600 transit fa-solid fa-pizza-slice"></i>
          <h1 className="font-bold font-lato">Pizza-Time</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
