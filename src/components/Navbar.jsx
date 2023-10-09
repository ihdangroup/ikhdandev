// import { useRouter } from "next/router";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ButtonMenu from "./ButtonMenu";

const Navbar = () => {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);
  const navlist = [
    { path: "/", name: "🏡Home" },
    { path: "/project", name: "Experience" },
    { path: "/skill", name: "📌Skills" },
    { path: "/interest", name: "💻Interest" },
    { path: "/awards", name: "🎁Awards" },
  ];
  return (
    <div className="bg-slate-800 fixed top-0 left-0 w-full z-10 text-gray-50 text-slate-800 py-5 border border-b-2 flex items-center border-slate-400 border-0 p-12 lg:px-24 ">
      <div className="w-full text-gray-50 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 flex justify-between">
          <NavLink to="/">Ikhdan 👨‍💻</NavLink>
          <div className="flex lg:hidden">
            <ButtonMenu showNav={showNav} setShowNav={setShowNav} />
          </div>
        </div>
        <div
          className={`lg:w-2/3 bg-slate-800 lg:relative w-full lg:flex flex-col lg:flex-row justify-between ${
            showNav ? "flex" : "hidden"
          }`}
        >
          {navlist.map((nav) => (
            <div
              key={nav.path}
              className={`${
                nav.path === pathname
                  ? "border border-b-2 border-0 border-b-purple-500"
                  : null
              } lg:mx-8 lg:my-0 my-6 w-full `}
            >
              <NavLink to={`${nav.path}`}>{nav.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
