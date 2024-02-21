import React from "react";
import img from "../img/letter-s.png";

function Navbar() {
  return (
    <>
      <div className="navbar bg-[#0A192F] text-gray-100">
        <div className="navbar-start text-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#0A192F]"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="p-2 border-green-500 border rounded-full sm:ml-9 animate-pulse">
            <img src={img} alt="" srcset="" className="w-7 sm:w-14 bg-rose-600 rounded-full p-2" />
          </div>
          {/* <a className="btn btn-ghost text-lg font-semibold">Portfolio</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li className="hover:text-rose-500">
              <a href="#">About</a>
            </li>
            <li className="hover:text-rose-500">
              <a href="#">Portfolio</a>
              
            </li>
            <li className="hover:text-rose-500">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end animate-pulse">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-lg font-semibold border rounded border-green-500 hover:text-rose-500"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
