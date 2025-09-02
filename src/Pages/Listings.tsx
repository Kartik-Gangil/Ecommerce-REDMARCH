import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"


const Listings = () => {
    const ProductArray = [
        {
            Route: "/ProductDetails",
            name: "RedMarch Marchion Oxford Edition",
            price: "4500",
            originalPrice: "5000",
            image: "/listings_shoe_temporary/Formals_Mock_Design/Marchion Oxford Edition/Gemini_Generated_Image_850v8e850v8e850v.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Cap-Toe Oxford",
            price: "5000",
            originalPrice: "6000",
            image: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_4my9b14my9b14my9.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Marchion Viceroy Edition",
            price: "6000",
            originalPrice: "7000",
            image: "/listings_shoe_temporary/Formals_Mock_Design/Marchion Viceroy Edition/Gemini_Generated_Image_lds00mlds00mlds0.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Blitz",
            price: "5000",
            originalPrice: "6000",
            image: "/listings_shoe_temporary/SNKRs Mock Designs/SNKRs Blitz/Gemini_Generated_Image_ofvnfcofvnfcofvn.png"
        },
        {

            Route: "/ProductDetails",
            name: "RedMarch Officer",
            price: "4000",
            originalPrice: "6000",
            image: "/listings_shoe_temporary/SNKRs Mock Designs/SNKRs Officer_s/Gemini_Generated_Image_rvzauirvzauirvza.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Prime",
            price: "6000",
            originalPrice: "7000",
            image: "/listings_shoe_temporary/SNKRs Mock Designs/SNKRs Prime/Gemini_Generated_Image_gk6i0tgk6i0tgk6i.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Alpha",
            price: "5500",
            originalPrice: "7000",
            image: "/listings_shoe_temporary/Sports Mock Designs/Sports Alpha/Gemini_Generated_Image_nf4tranf4tranf4t.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Apex",
            price: "5999",
            originalPrice: "6500",
            image: "/listings_shoe_temporary/Sports Mock Designs/Sports Apex/Gemini_Generated_Image_ufmj8sufmj8sufmj.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Blaze",
            price: "4999",
            originalPrice: "5500",
            image: "/listings_shoe_temporary/Sports Mock Designs/Sports Blaze/Gemini_Generated_Image_t2jbs2t2jbs2t2jb.png"
        },
        {
            Route: "/ProductDetails",
            name: "RedMarch Gamma",
            price: "4000",
            originalPrice: "4500",
            image: "/listings_shoe_temporary/Sports Mock Designs/Sports Gamma/Gemini_Generated_Image_3ugemd3ugemd3uge.png"
        },
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
                                        Route={product.Route}
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
            <Footer />
        </div>
    )
}

export default Listings
