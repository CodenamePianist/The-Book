import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      {/* Header section including login button */}
      <header className="flex justify-around items-center my-8">
        <h1 className="text-[40px] text-[#39FF14]">Book of Rave-Alations</h1>
        <button onClick={handleLogin} className="border border-solid border-[#39FF14] rounded-full bg-black text-[20px] text-[#39FF14] px-6 py-1 hover:bg-[#39FF14] hover:text-black">
          {!isLoggedIn ? "Login" : "Logout"}
        </button>
      </header>

      {/* Navigation Bar */}
      <nav className="w-full flex justify-evenly">
        <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
          Home
        </a>
        <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
          Store
        </a>
        <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
          Festivals
        </a>
        <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
          Kandi Generator
        </a>
        <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
          Groups
        </a>
        {isLoggedIn && (
          <a href="" className="uppercase text-[20px] text-white hover:text-[#39FF14] hover:scale-125">
            Account
          </a>
        )}
      </nav>
      <h2 className="text-white text-center mt-10">Welcome to Book of Rave-Alations, your one-stop shop for all of your rave needs! We{`${"'"}`}re constantly adding new features so stay with us as the site grows!</h2>
    </>
  );
}
