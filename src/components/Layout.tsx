import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      {/* Header section including login button */}
      <div>
        <header className="flex justify-around items-center my-8">
          <h1 className="text-[40px] text-[#39FF14] font-semibold">
            The Book of Rave-Alations
          </h1>
          <button
            onClick={handleLogin}
            className="border border-solid border-[#39FF14] border-2 rounded-full bg-black text-[20px] text-[#39FF14] px-6 py-1 hover:cursor-pointer hover:bg-[#39FF14] hover:text-black"
          >
            {!isLoggedIn ? "Login" : "Logout"}
          </button>
        </header>

        {/* Navigation Bar */}
        <nav className="w-full flex justify-evenly">
          <NavLink
            to="/"
            className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
          >
            Store
          </NavLink>
          <NavLink
            to="/festivals"
            className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
          >
            Festivals
          </NavLink>
          <NavLink
            to="/kandigen"
            className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
          >
            Kandi Generator
          </NavLink>
          <NavLink
            to="/groups"
            className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
          >
            Groups
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/account"
              className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125"
            >
              Account
            </NavLink>
          )}
        </nav>
        <h2 className="text-white text-center mt-10">
          Welcome to The Book of Rave-Alations, your one-stop shop for all of your
          rave and festival needs! We{`${"'"}`}re constantly adding new features so stay with
          us as the site grows!
        </h2>
        <Outlet />
      </div>
    </>
  );
}
