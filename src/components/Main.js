import LemonDessert from "../assets/lemon dessert.jpg";
import delivery from "../assets/delivery.svg";

export default function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-header">
          <h2 className="main-title">This weeks specials!</h2>
          <div>
            <button className="main-btn">Online Menu</button>
          </div>
        </div>
        <div className="main-card-container">
          <div className="card">
            <div className="card-img img-one"></div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Greek salad</h3>
                <p className="price">$12.88</p>
              </div>
              <p className="card-para">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons
              </p>
              <div className="card-footer">
                <p>Order a delivery </p>
                <img className="icon" src={delivery} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img img-two"></div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Bruchetta</h3>
                <p className="price">$12.88</p>
              </div>
              <p className="card-para">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons
              </p>
              <div className="card-footer">
                <p>Order a delivery </p>
                <img className="icon" src={delivery} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img img-three"></div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Lemon Dessert</h3>
                <p className="price">$12.88</p>
              </div>
              <p className="card-para">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons
              </p>
              <div className="card-footer">
                <p>Order a delivery </p>
                <img className="icon" src={delivery} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
