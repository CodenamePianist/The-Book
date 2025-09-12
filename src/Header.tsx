import { useState } from "react"

export default function Header() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }
    
    return (
        <>
            {/* Header section including login button */}
            <h1>Book of Rave-Alations</h1>
            <button onClick={handleLogin}>
                {!isLoggedIn ? "Login" : "Logout"}
            </button>

            {/* Navigation Bar */}
            <nav>
                <a href="">Home</a>
                <a href="">Store</a>
                <a href="">Festivals</a>
                <a href="">Kandi Generator</a>
                <a href="">Groups</a>
                {isLoggedIn && <a href="">Account</a>}
            </nav>
        </>
    )
}