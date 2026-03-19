import { useState } from "react";
import Modal from "../modal/Modal";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import InputForm from "../input_form/InputForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    setIsOpen(true);
  };

  return (
    <>
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
          <li className="login" onClick={handleLogin}>
            Login
          </li>
        </ul>
      </header>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
