import { TwitterIcon, InstagramIcon, FacebookIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-black py-16 md:px-0 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 ">
                            <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain " />
                            <div className="text-2xl font-bold text-red-700 ">RED MARCH</div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Forging the future of premium footwear with uncompromising quality and bold design.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 p-6 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-800 hover:bg-blue-200 transition-all duration-300 ease-in-out">
                                <span className="text-xs font-bold"><FacebookIcon /></span>
                            </div>
                            <div className="w-8 h-8 p-6 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-800 hover:bg-blue-200 transition-all duration-300 ease-in-out">
                                <span className="text-xs font-bold"><TwitterIcon /></span>
                            </div>
                            <div className="w-8 h-8 p-6 rounded-full flex items-center justify-center cursor-pointer  hover:text-pink-800 hover:bg-purple-200 transition-all duration-300 ease-in-out">
                                <span className="text-xs font-bold"><InstagramIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-black transition-all duration-300 ease-in-out">Home</Link></li>
                            <li><Link to="/listings" className="hover:text-black transition-all duration-300 ease-in-out">Shop</Link></li>
                            <li><Link to="#" className="hover:text-black transition-all duration-300 ease-in-out">About Us</Link></li>
                            <li><Link to="#" className="hover:text-black transition-all duration-300 ease-in-out">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Sports</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Formals</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Sneakers</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Limited Edition</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Size Guide</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Returns</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">Shipping</a></li>
                            <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 mb-[-40px] text-center text-gray-400">
                    <p>&copy; 2025 RED MARCH. All rights reserved. Forge your legacy.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
