import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
     

      <ul className="flex gap-6">
        <li>
          <Link to="/home" className="hover:text-blue-400 transition mr-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
