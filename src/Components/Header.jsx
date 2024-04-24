import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../style";
import { navLinks } from "../constants";
import { menu, close,logo } from "../assets";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
    const location = useLocation();

  // Function to determine if the current location is the homepage
  const isHomepage = location.pathname === "/";
  return (
    <nav
      className={`${styles.paddingX} w-full sticky flex items-center py-5 px-5 top-0 z-20 ${
        isHomepage ? "bg-transparent" : "bg-black"
      } text-white`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-9 h-auto mx-3"></img>
          <p className=" text-[25px] font-bold cursor-pointer">
            Udbhav <span className="sm:hidden hidden"></span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active !== nav.title ? "text-white" : "text-secondary"
              } text-[18px] font-semibold hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute bg-primary top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
