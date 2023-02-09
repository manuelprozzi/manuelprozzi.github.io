import { NavLink } from "react-router-dom";

const Navbar = () => {
  /* Translation */

  const activeStyle =
    "rounded-full bg-slate-800 p-2 text-teal-300 dark:bg-teal-400 dark:text-slate-800";
  const inactiveStyle =
    "rounded-full bg-teal-400 p-2 text-slate-800 dark:bg-teal-700 dark:text-slate-800";

  return (
    <nav className="block w-full sm:hidden">
      <ul className="m-auto mt-5 mb-5 flex w-full justify-between sm:max-w-3xl lg:max-w-6xl">
        <li className="ml-5 mr-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li className="ml-5 mr-5">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
