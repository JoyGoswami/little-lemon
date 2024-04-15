import { Link } from "react-router-dom";
import Logo from "../assets/Logo .svg";

export default function Nav() {
  return (
    <header className="">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <nav>
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
      </div>
    </header>
  );
}
