import React from 'react'
import { useDarkMode } from "../Hooks/useDarkMode";

const socceball = {
    width: "10vw",
    margin: "auto",

}

export default function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();

        setDarkMode(!darkMode); // if it's light change it to dark, if it's dark change it to light
    };

    return(
        <nav className="navbar">
            <p>Click the Soccer Ball to switch between light and dark mode</p>
            <div style={socceball} className="dark-mode_toggle">
                <img 
                    src="https://cdn.clipart.email/8ab264def6bf25317f7de231dd316b8e_football-clip-art-soccer-ball-png-download-12001200-free-_1200-1200.png"
                    alt="Soccer Ball"
                    onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    )
}
