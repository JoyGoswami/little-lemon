//import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Reservations from "./components/Reservations";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <header className="App">header</header>
    // <div className="App">
    //   <Header />
    // </div>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
