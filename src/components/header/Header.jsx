import "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-blue-500 text-white relative">
      <div className="container">
        <div className="navbar flex justify-between items-center py-5">
          <div className="brand-name">
            <Link to={"/"}>
              <h2 className="text-2xl font-bold w-[150px]">Quice Quiz</h2>
            </Link>
          </div>
          <ul
            className={`navbar-nav pb-4 absolute left-0 w-full flex flex-col items-center bg-blue-500 gap-4 ${
              open ? "top-full" : "top-[-200px]"
            } md:static md:w-2/6 lg:w-1/6 md:flex md:flex-row justify-between md:items-center md:pb-0`}
          >
            <NavLink to={"/topic"}>Topic</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="bg-transparent md:hidden"
          >
            {open ? (
              <XMarkIcon className="w-6" />
            ) : (
              <Bars3Icon className="w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
