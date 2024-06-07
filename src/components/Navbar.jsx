import logo from "../assets-20240602T032754Z-001/assets/logo.png";
import user from "../assets-20240602T032754Z-001/assets/user.png";

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { navigation } from "../constants/Navigation";

const Navbar = () => {
  const location = useLocation()
  const removeData = location.search.slice(3).split('%20').join(' ')
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [searchInput, setSearchInput] = useState(removeData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  return (
    <nav className="bg-gray-800 w-full fixed opacity-60 z-50 h-16">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              className="w-24 h-20 object-scale-down px-2"
              alt="logo"
            />
          </Link>
          <div className="hidden md:flex gap-4">
            {navigation.map((item, ind) => (
              <NavLink
                key={ind}
                to={item.href}
                className={({ isActive }) =>
                  `hover:text-white ${isActive && "text-yellow-300"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="  flex justify-between items-center gap-4 px-5">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={(e)=>navigate()}
              className="bg-transparent border-b border-red-500 outline-none text-white hidden md:block"
              placeholder="Search here..."/>
            <button className="text-white text-2xl hover:text-gray-300">
              <CiSearch />
            </button>
          </form>
          <div className="">
            <img
              src={user}
              className="w-10 active:scale-50 cursor-pointer transition-all  h-10 rounded-full"
              alt="user"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
