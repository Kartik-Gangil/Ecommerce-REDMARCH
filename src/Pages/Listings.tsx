import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"


const Listings = () => {
    const ProductArray = [
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
        },
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
    ]
    return (
        <div className="min-h-screen">
            {/* banner */}
            <Banner />
            {/* navbar */}
            <Navbar />
            {/* grid - product listings and filter */}

            <div className="grid grid-cols-1 md:grid-cols-4 py-36 gap-4 p-4">
                {/* Filter Section */}
                <div className="col-span-1">
                    {/* Placeholder for filter options */}
                    <div className="bg-white p-4 rounded-2xl sticky top-36 shadow-md w-64">
                        <h2 className="text-xl font-semibold mb-4">Filters</h2>
                        <ul className="space-y-4">

                            {/* Category Filter */}
                            <li>
                                <h3 className="text-lg font-medium mb-2">Category</h3>
                                <div className="flex flex-col space-y-2 text-gray-700">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        Men
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        Women
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        Kids
                                    </label>
                                </div>
                            </li>

                            {/* Price Filter */}
                            <li>
                                <h3 className="text-lg font-medium mb-2">Price Range</h3>
                                <div className="flex flex-col space-y-2 text-gray-700">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="price" className="accent-red-600" />
                                        Under ₹1000
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="price" className="accent-red-600" />
                                        ₹1000 – ₹5000
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="price" className="accent-red-600" />
                                        Above ₹5000
                                    </label>
                                </div>
                            </li>

                            {/* Availability */}
                            <li>
                                <h3 className="text-lg font-medium mb-2">Availability</h3>
                                <div className="flex flex-col space-y-2 text-gray-700">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        In Stock
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        Out of Stock
                                    </label>
                                </div>
                            </li>

                            {/* Apply Button */}
                            <li>
                                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                                    Apply Filters
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* Product Listings */}
                <div className="col-span-3">
                    {/* Placeholder for product listings */}
                    <div className="bg-white p-4 rounded shadow">
                        {ProductArray.length === 0 ? (
                            <p>No products available at the moment.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* <p>No products available at the moment.</p> */}
                                {ProductArray.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        index={index}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        originalPrice={product.originalPrice}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Listings
