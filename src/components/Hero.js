// import { Link } from "react-router-dom";
import restaurant from "../assets/restauranfood.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h1 className="hero-sub-title">Chicago</h1>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <button className="hero-btn">Reserve a Tablel</button>
        </div>
        <div className="hero-img">
          <div className="img-cont"></div>
        </div>
      </div>
    </section>
  );
}
