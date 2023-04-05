import { Link, NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
