import { Clock } from "lucide-react"
import Banner from "../components/Banner"
import CartCard from "../components/CartCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

const Cart = () => {
    return (
        <>
            {/* banner */}
            <Banner />
            {/* navbar */}
            <Navbar />
            {/* cart page */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-20 py-36">
                <div className="col-span-2">
                    <div className="bg-white p-4 rounded-2xl sticky top-36 shadow-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Cart</h2>
                        <CartCard />
                        <div className="flex items-center gap-2 mt-4 text-yellow-600">
                            <Clock />
                            <h2>Just a few left. Order Soon</h2>
                        </div>

                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-white p-4 rounded-2xl sticky top-36 shadow-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <ul className="mb-4">
                            <ul className="flex justify-between items-center mb-2">
                                <li>Sub-Total</li>
                                <li className="text-center">10,795</li>
                            </ul>
                            <ul className="flex justify-between items-center mb-2">
                                <li>Estimated delivery & handling</li>
                                <li className="text-center">Free</li>
                            </ul>
                        </ul>
                        <hr />
                        <ul className="flex justify-between items-center mt-2 mb-2">
                            <li>Total</li>
                            <li className="text-center">10,795</li>
                        </ul>
                        <hr />
                        <button className="mt-2 mb-2 w-full bg-green-600 rounded-full text-white py-4 hover:bg-green-700 duration-300">Checkout</button>
                    </div>
                </div>
            </div>
                <h1 className="font-semibold text-lg md:text-2xl px-20 mb-5">You also might like</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Shadow Elite",
                            price: "299",
                            image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        },
                        {
                            name: "Crimson Runner",
                            price: "349",
                            image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        },
                        {
                            name: "Midnight Force",
                            price: "399",
                            image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        }
                    ].map((product, index) => (
                        <ProductCard key={index} index={index} name={product.name} price={product.price} image={product.image} />
                    ))}
                </div>
            
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Cart
