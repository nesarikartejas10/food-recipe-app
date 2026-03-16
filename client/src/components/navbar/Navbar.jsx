import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h2>FoodHub</h2>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>My Recipe</NavLink>
        </li>
        <li>
          <NavLink>Favourites</NavLink>
        </li>
        <li className="login">Logout</li>
      </ul>
    </header>
  );
};

export default Navbar;
