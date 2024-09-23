import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="flex flex-row gap-1 w-full h-10 bg-black text-white">
                <Link to="/"><h1 className="pt-2">Home</h1></Link>
                <Link 
                    to="/Blogs" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <h1 className="pt-2">Blogs</h1>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="absolute bg-white shadow-lg mt-1 ml-8" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                    <Link to="/Blogs1" className="block px-4 py-2">PS5 Looks So Good In This Beautiful Retro Tribute To The Original PlayStation </Link>
                    <Link to="/Blogs2" className="block px-4 py-2">Hit Box tech review - An unconventional, but amazing way to play fighting games</Link>
                    <Link to="/Blogs3" className="block px-4 py-2">Brook Wingman XB review</Link>
                    <Link to="/Blogs4" className="block px-4 py-2">Nvidia GeForce RTX 4060 review: the least underwhelming 1080p graphics card</Link>

                </div>
            )}
        </>
    );
}

export default NavBar;
