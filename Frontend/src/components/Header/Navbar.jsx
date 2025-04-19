import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("login");

  const isLoggedIn = false; // Simulated login state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const showForm = (type) => setFormType(type);
  const togglePassword = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };

  return (
    <>
    
      <nav className="flex justify-between items-center p-5 shadow-md bg-white">
        <Link to="/" className="text-2xl text-red-600 font-bold cursor-pointer">M&M</Link>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/smart-cooking" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>SmartCooking®</NavLink>
          </li>
          <li>
            <NavLink to="/stores" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Stores</NavLink>
          </li>
          <li>
            <NavLink to="/media" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}>Media</NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <NavLink to="/profile">
                <img src="/user.jpg" alt="User Profile" className="w-8 h-8 rounded-full" />
              </NavLink>
            ) : (
              <button onClick={toggleModal} className="text-2xl text-red-600">
                <FaUserCircle />
              </button>
            )}
          </li>
        </ul>

        <button id="menu-btn" onClick={toggleMenu} className="md:hidden text-red-600 text-2xl">
          &#9776;
        </button>
      </nav>

      {/* Mobile menu */}
      <ul className={`flex flex-col text-center bg-white shadow-md p-5 space-y-4 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <li><Link to="/products" className="hover:text-red-500" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/smart-cooking" className="hover:text-red-500" onClick={toggleMenu}>SmartCooking®</Link></li>
        <li><Link to="/stores" className="hover:text-red-500" onClick={toggleMenu}>Stores</Link></li>
        <li><Link to="/media" className="hover:text-red-500" onClick={toggleMenu}>Media</Link></li>
        <li>
          {isLoggedIn ? (
            <Link to="/profile" onClick={toggleMenu}>
              <img src="/user.jpg" alt="User" className="w-8 h-8 mx-auto rounded-full" />
            </Link>
          ) : (
            <button onClick={() => { toggleMenu(); toggleModal(); }} className="text-red-600 text-2xl">
              <FaUserCircle />
            </button>
          )}
        </li>
      </ul>

      {/* Auth Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between mb-4">
              <button onClick={() => showForm("login")} className={`font-semibold ${formType === "login" ? "text-red-600" : "text-gray-500"}`}>
                Login
              </button>
              <button onClick={() => showForm("signup")} className={`font-semibold ${formType === "signup" ? "text-red-600" : "text-gray-500"}`}>
                Sign Up
              </button>
              <button onClick={toggleModal} className="text-red-600 font-bold">&times;</button>
            </div>

            {formType === "login" && (
              <form>
                <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" required />
                <div className="relative">
                  <input type="password" id="loginPass" placeholder="Password" className="w-full p-2 border rounded mb-2" required />
                  <button type="button" onClick={() => togglePassword('loginPass')} className="absolute right-2 top-2 text-sm">👁</button>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded">Login</button>
              </form>
            )}

            {formType === "signup" && (
              <form>
                <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" required />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" required />
                <div className="relative">
                  <input type="password" id="signupPass" placeholder="Password" className="w-full p-2 border rounded mb-2" required />
                  <button type="button" onClick={() => togglePassword('signupPass')} className="absolute right-2 top-2 text-sm">👁</button>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
