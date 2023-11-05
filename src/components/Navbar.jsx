import { NavLink } from "react-router-dom";
import '../CSS/Nav.css'

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-4 lg:px-20">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="white"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img
              className=" w-48"
              src="https://i.ibb.co/LpW157k/learnifycom-high-resolution-logo-white-transparent.png"
              alt=""
            />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex flex-row gap-5 text-white">
              <li className=" hover:text-green-300 ">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              |
              <li className=" hover:text-green-300">
                <NavLink
                  to={"/assignments"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Assignments
                </NavLink>
              </li>
              |
              <li className=" hover:text-green-300">
                <NavLink
                  to={"/login"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here
        Content */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li className=" hover:text-green-300 ">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className=" hover:text-green-300">
                <NavLink
                  to={"/assignments"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Assignments
                </NavLink>
              </li>
              <li className=" hover:text-green-300">
                <NavLink
                  to={"/login"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
