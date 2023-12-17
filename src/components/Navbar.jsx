import { Link, NavLink } from "react-router-dom";
import "../CSS/Nav.css";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName);
  const handelLogout = () => {
    logOut()
      .then((data) => console.log("Logout", data))
      .catch((error) => console.log(error));
  };
  return (
    <div style={{zIndex:10}} className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-4 mt-3 lg:px-20">
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
          <div className="flex-1 ">
            <Link to={'/'}>
              <img
                className=" w-48"
                src="https://i.ibb.co/LpW157k/learnifycom-high-resolution-logo-white-transparent.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex flex-row gap-5 items-center text-white">
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
              {user && (
                <>
                  <li>
                    <NavLink
                      to={"/createAssignments"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Create Assignments
                    </NavLink>
                  </li>
                  |
                  <li>
                    <NavLink
                      to={"/myAssignments"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      My Assignments
                    </NavLink>
                  </li>
                  |
                  <li>
                    <NavLink
                      to={"/submittedAssignments"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Submitted Assignments
                    </NavLink>
                  </li>
                </>
              )}
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar bg-[#5737FB] "
                  >
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#5737FB] rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">Profile</a>
                    </li>
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <button onClick={handelLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
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
              )}
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
          {user && (
            <>
              <li>
                <NavLink
                  to={"/createAssignments"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Create Assignments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/myAssignments"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Assignments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/submittedAssignments"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Submitted Assignments
                </NavLink>
              </li>
            </>
          )}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar bg-[#5737FB] "
              >
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#5737FB] rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button onClick={handelLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
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
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
