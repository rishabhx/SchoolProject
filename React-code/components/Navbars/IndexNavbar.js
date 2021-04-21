import React from "react";
import Link from "next/link";
import logo from "assets/img/index/logo.png"
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          
           <div>
              {/* <img src={logo} className="nav-logo mr-3" style={{float: "left"}}/>  */}
               <Link href="/">
                  <a>
                      <img
                        src={logo}
                        alt="logo"
                        className="nav-logo mr-3"
                        style={{float: "left"}}
                      />
                  </a>
              </Link>

              <Link href="/" style={{float: "right"}}>
                <a
                  className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase top-margin"
                  href="/"
                >
                  Android Network Traces
                </a>
              </Link>
           </div>


         
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >



            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
            

              <li className="flex items-center">
                <Link href="/apps">
                  <a
                    className={
                      "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    All Apps
                  </a>
                </Link>
              </li> 

              <li className="flex items-center">
                <Link href="/domains">
                  <a
                    className={
                      "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    All Domains
                  </a>
                </Link>
              </li> 

              <li className="flex items-center">
                <Link href="/faq">
                  <a
                    className={
                      "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    FAQ
                  </a>
                </Link>
              </li> 

              {/* Search Bar */}
              <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto px-3">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search apps, domains"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
              </form>

            </ul>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}
