import { Link } from "react-router-dom";
import Logo from "../assets/Logo .svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-cont">
        <div className="footer-logo">
          <ul>
            <li>
              <img src={Logo} alt="footer logo" />
            </li>
            <li>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </li>
          </ul>
        </div>
        <div className="impt-links">
          <ul>
            <li className="footer-heading">Important Links</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li className="footer-heading">Contact</li>
            <li>
              <p>Address</p>
              <p>New York, USA</p>
            </li>
            <li>
              <p>Phone</p>
              <p>00 000 000 000</p>
            </li>
            <li>
              <p>Email</p>
              <p>abcd@xyz.com</p>
            </li>
          </ul>
        </div>
        <div className="Socials">
          <ul>
            <li className="footer-heading">Social Media Links</li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
