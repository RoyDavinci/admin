import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/sidebar.css";
import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-[#e6e6e6] bg-opacity-1 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#f1f0f0] transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-900 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="/"
                        className={`px-3 py-4 rounded block truncate transition duration-150 ${
                          pathname.includes("/")
                            ? "hover:bg-white hover:text-black hover:border hover:border-black bg-black text-white "
                            : " text-slate-600 bg-[#dbdbdb] hover:text-white hover:bg-black" 
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        {/*Dashboard*/}
                        <div className="flex items-center justify-between">
                          <NavLink to='/'>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                              </svg>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white">
                                Dashboard
                              </span>
                            </div>
                          </NavLink>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`px-5 mt-2 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0 sn-SubList" >
                            <NavLink
                              end
                              to="/status-list"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                height="1.5em"
                                width="1.5em"
                                className="ml-2 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                />
                              </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Status chart
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/status-list"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                height="1.5em"
                                width="1.5em"
                                className="ml-2 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                              </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Status list
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/status-graph"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      className="ml-2 mr-3"
    >
      <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z" />
      <path d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z" />
    </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Status graph
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/report-data"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
 <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="25px"
      width="25px"
      className="ml-2 mr-3"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 3.5v12a2 2 0 002 2H17M6.5 11.5v3M10.5 8.5v6M14.5 5.5v9" />
      </g>
    </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Report data
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/perfomance"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                                           <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      className="ml-2 mr-3"

    >
      <path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"
      />
    </svg>

                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Performance
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Users */}
              <li className="px-3 py-3 text-slate-600 rounded sn-ListItem">
                <NavLink
                  end
                  to="/users"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-white bg-black flex rounded "
                      : " text-slate-600 rounded flex")
                  }
                >
                  <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    height="2em"
                    width="1.5em"
                    className="mr-4 ml-2"
                  >
                    <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                  <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1">
                    Users
                  </span>
                </NavLink>
              </li>

              {/* Reports */}
              <li className="px-3 py-3 text-slate-600 rounded sn-ListItem">
                <NavLink
                  end
                  to="/reports"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-white flex")
                  }
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="2em"
                    width="1.5em"
                    className="mr-4 ml-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h5.697M18 14v4h4M18 11V7a2 2 0 00-2-2h-2" />
                    <path d="M10 3 H12 A2 2 0 0 1 14 5 V5 A2 2 0 0 1 12 7 H10 A2 2 0 0 1 8 5 V5 A2 2 0 0 1 10 3 z" />
                    <path d="M22 18 A4 4 0 0 1 18 22 A4 4 0 0 1 14 18 A4 4 0 0 1 22 18 z" />
                    <path d="M8 11h4M8 15h3" />
                  </svg>
                  <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1">
                    Reports
                  </span>
                </NavLink>
              </li>

              {/* Finance */}
              <SidebarLinkGroup activecondition={pathname.includes("finance")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`px-3 py-3 text-slate-600 rounded bg-[#dbdbdb] block  truncate transition duration-150 ${
                          pathname.includes("finance")
                            ? "hover:text-slate-200"
                            : "hover:text-white hover:bg-black"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="2em"
                              width="1.5em"
                              className="ml-2 mr-4"
                            >
                              <path d="M6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64" />
                            </svg>
                            <span className=" font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Finances
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`px-5 mt-2  ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/finance/sales"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1.5em"
                                width="1.5em"
                                className="ml-2 mr-3"
                              >
                                <path d="M9 17H7v-7h2v7m4 0h-2V7h2v10m4 0h-2v-4h2v4m2 2H5V5h14v14.1M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                              </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                Sales
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/finance/revenue"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1.5em"
                                width="1.5em"
                                className="ml-2 mr-3"
                              >
                                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                              </svg>
                              <span className=" font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Revenue
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0 sn-SubList">
                            <NavLink
                              end
                              to="/finance/payment"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-black bg-white border-black"
                                  : "text-slate-500 hover:text-black flex")
                              }
                            >
                              <svg
                                viewBox="0 0 640 512"
                                fill="currentColor"
                                height="1.5em"
                                width="1.5em"
                                className="ml-2 mr-3"
                              >
                                <path d="M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64h-64v-64zm64-160c0 35.3-28.7 64-64 64V96h64zm352 160v64h-64c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zm-64 112c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z" />
                              </svg>
                              <span className="font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Payments
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Analytics */}
              <li className="px-3 py-3 text-slate-600 rounded sn-ListItem">
                <NavLink
                  end
                  to="/analytics"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-white bg-black"
                      : "text-slate-600 hover:text-white flex")
                  }
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="2rem"
                    className=" ml-2 mr-4 hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 19V10.5C20 10.1852 19.8518 9.88885 19.6 9.7L12.6 4.45C12.2444 4.18333 11.7556 4.18333 11.4 4.45L4.4
                           9.7C4.14819 9.88885 4 10.1852 4 10.5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19Z"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 13V16M12 10V16M16 15V16"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1">
                    Analytics
                  </span>
                </NavLink>
              </li>

              {/* Location */}
              <li className="px-3 py-3 text-slate-600 rounded sn-ListItem">
                <NavLink
                  end
                  to="/location"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-white bg-black"
                      : "text-slate-600 hover:text-white flex")
                  }
                >
                  <svg
                    width="1.5rem"
                    height="2rem"
                    className="ml-2 mr-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9749 19.9498V17.9498C11.6749 17.8498 12.3539 17.6581 13.0119 17.3748C13.6706 17.0915 14.2916 16.7331 14.8749 16.2998L16.3249 17.7498C15.5416 18.3665 14.6999 18.8625 13.7999 19.2378C12.8999 19.6125 11.9582 19.8498 10.9749 19.9498ZM17.7249 16.2998L16.3249 14.8998C16.7582 14.3498 17.1082 13.7455 17.3749 13.0868C17.6416 12.4288 17.8249 11.7331 17.9249 10.9998H19.9749C19.8416 12.0331 19.5876 12.9955 19.2129 13.8868C18.8376 14.7788 18.3416 15.5831 17.7249 16.2998ZM17.9249 8.9998C17.8249 8.2498 17.6416 7.54547 17.3749 6.8868C17.1082 6.2288 16.7582 5.63314 16.3249 5.0998L17.7249 3.6998C18.3582 4.43314 18.8709 5.2498 19.2629 6.1498C19.6542 7.0498 19.8916 7.9998 19.9749 8.9998H17.9249ZM8.9749 19.9498C6.4249 19.6498 4.2959 18.5541 2.5879 16.6628C0.879235 14.7708 0.0249023 12.5498 0.0249023 9.9998C0.0249023 7.41647 0.879235 5.18314 2.5879 3.2998C4.2959 1.41647 6.4249 0.333138 8.9749 0.0498047V2.0498C6.9749 2.33314 5.31657 3.2248 3.9999 4.7248C2.68324 6.2248 2.0249 7.98314 2.0249 9.9998C2.0249 11.9998 2.68324 13.7498 3.9999 15.2498C5.31657 16.7498 6.9749 17.6498 8.9749 17.9498V19.9498ZM14.9249 3.6998C14.3249 3.2498 13.6916 2.88314 13.0249 2.5998C12.3582 2.31647 11.6749 2.13314 10.9749 2.0498V0.0498047C11.9582 0.133138 12.8999 0.362138 13.7999 0.736805C14.6999 1.11214 15.5416 1.61647 16.3249 2.2498L14.9249 3.6998ZM9.9999 14.9998C8.6499 13.8498 7.6459 12.7871 6.9879 11.8118C6.32924 10.8371 5.9999 9.93314 5.9999 9.0998C5.9999 7.8498 6.40424 6.85414 7.2129 6.1128C8.0209 5.3708 8.9499 4.9998 9.9999 4.9998C11.0499 4.9998 11.9792 5.3708 12.7879 6.1128C13.5959 6.85414 13.9999 7.8498 13.9999 9.0998C13.9999 9.93314 13.6706 10.8371 13.0119 11.8118C12.3539 12.7871 11.3499 13.8498 9.9999 14.9998ZM9.9999 9.9998C10.2999 9.9998 10.5542 9.8958 10.7629 9.6878C10.9709 9.47914 11.0749 9.2248 11.0749 8.9248C11.0749 8.64147 10.9709 8.39147 10.7629 8.1748C10.5542 7.95814 10.2999 7.8498 9.9999 7.8498C9.6999 7.8498 9.4459 7.95814 9.2379 8.1748C9.02923 8.39147 8.9249 8.64147 8.9249 8.9248C8.9249 9.2248 9.02923 9.47914 9.2379 9.6878C9.4459 9.8958 9.6999 9.9998 9.9999 9.9998Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1">
                    Location
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 mb-20 mx-8 hidden lg:inline-flex 2xl:hidden mt-auto" >
          <div className="w-1/3">
         <a href="#">
         <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="2.5em"
      width="2em"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
      />
    </svg>
         </a>
          </div>
          <div className="w-1/3 px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
          <div className="w-1/3">
         <NavLink>
          <p className="text-slate-800 mt-2 text-md">Logout</p>
         </NavLink>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
