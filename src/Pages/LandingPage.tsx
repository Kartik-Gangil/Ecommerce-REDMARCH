
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
const LandingPage = () => {
    const Navigate = useNavigate();
    return (
        <div className="min-h-screen bg-light text-white">
            {/* Offer Banner */}
            <Banner />

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/bg-image.jpg)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-0">
                    <h1 className="text-3xl md:text-7xl font-bold mb-6 font-serif leading-tight">
                        “ Forge The Legacy ”
                    </h1>
                    <p className="text-xs md:text-xl mb-6 font-serif leading-tight" >Make Your Own Story with RED MARCH</p>
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <button onClick={() => Navigate("/listings")} className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Shop Now
                        </button>
                        <button className="border border-white hover:bg-white hover:text-black text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300">
                            Watch Stories
                        </button>
                    </div>
                </div>
            </section>

            {/* Make Them Watch Section */}
            <section className="py-20 px-6 bg-[#6c0e0e]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-16 text-white">
                        MAKE THEM WATCH
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                Route: "/listings?Sports",
                                name: "Sports",
                                image: "/Shoes/sport_shoe.jpg"
                            },
                            {
                                Route: "/listings?Sneaker",
                                name: "Sneaker",
                                image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                            },
                            {
                                Route: "/listings?Formal",
                                name: "Formal",
                                image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                            }
                        ].map((product, index) => (
                            <ProductCard Route={product.Route} key={index} index={index} title={product.name} image={product.image} />
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="py-20 px-6 text-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-16 ">
                        NEW ARRIVALS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Urban Legend",
                                price: "279",
                                originalPrice: "320",
                                image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Street King",
                                price: "329",
                                originalPrice: "380",
                                image: "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Night Walker",
                                price: "359",
                                originalPrice: "420",
                                image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                            }
                        ].map((product, index) => (
                            <ProductCard key={index} index={index} name={product.name} price={product.price} image={product.image} originalPrice={product.originalPrice} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage
