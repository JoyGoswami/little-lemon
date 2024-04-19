import { Link } from "react-router-dom";
import Logo from "../assets/Logo .svg";
import hamBurger from "../assets/hamburger-menu.svg";
import { useState } from "react";

export default function Nav() {
  const [expand, setExpand] = useState(false);

  function toggleNavExpand() {
    setExpand(!expand);
  }

  return (
    <header className="">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className={expand ? "nav-display" : ""}>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-links">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="nav-links">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" className="nav-links">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ham-menu" onClick={toggleNavExpand}>
          <img src={hamBurger} />
        </div>
      </div>
    </header>
  );
}
