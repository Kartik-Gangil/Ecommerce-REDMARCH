import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const Navigate = useNavigate();

    return (
        <>

            <nav className="px-6 py-4 bg-white text-black backdrop-blur-sm fixed w-full top-14 md:top-9 z-50 shadow-md">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}

                    <div onClick={()=>Navigate("/")} className="flex items-center space-x-2 cursor-pointer">
                        <img src="http://localhost:5173/logo.png" alt="logo" className="h-10 w-10 object-contain " />
                        <div className="text-lg md:text-2xl font-bold text-red-700">RED MARCH</div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-red-600 text-gray-600 transition-colors">Home</Link>
                        <Link to="/listings" className="hover:text-red-600 text-gray-600 transition-colors">Shop</Link>
                        <Link to="#" className="hover:text-red-600 text-gray-600 transition-colors">About</Link>
                        <Link to="#" className="hover:text-red-600 text-gray-600 transition-colors">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-2 md:space-x-6">
                        <Search className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors" />
                        <User className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors" />
                        <ShoppingBag onClick={()=>Navigate("/cart")} className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors" />
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden focus:outline-none"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <X className="w-6 h-6 hover:text-red-600 transition-colors" />
                            ) : (
                                <Menu className="w-6 h-6 hover:text-red-600 transition-colors" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className={`flex flex-col items-center space-y-4 overflow-hidden md:hidden transition-all duration-500 ease-in-out 
                    ${mobileOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
                    `}>
                        <Link to="/" className="hover:text-red-600 text-gray-600 transition-colors">Home</Link>
                        <Link to="/listings" className="hover:text-red-600 text-gray-600 transition-colors">Shop</Link>
                        <Link to="#" className="hover:text-red-600 text-gray-600 transition-colors">About</Link>
                        <Link to="#" className="hover:text-red-600 text-gray-600 transition-colors">Contact</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
