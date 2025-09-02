import { useRef, useState } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { BellRingIcon } from "lucide-react";
interface ImgObject {
    Img: string;
}[]
const ProdutDetail = () => {
    const ImgArray: ImgObject[] = [
        { Img: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_4my9b14my9b14my9.png" },
        { Img: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_a4qsa8a4qsa8a4qs.png" },
        { Img: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_dqjqbzdqjqbzdqjq.png" },
        { Img: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_jb7oaijb7oaijb7o.png" },
        { Img: "/listings_shoe_temporary/Formals_Mock_Design/Cap-Toe Oxford/Gemini_Generated_Image_kv7wvpkv7wvpkv7w.png" },
    ];
    const [mainImg, setMainImg] = useState<string>(ImgArray[0].Img);


    const imgRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState("description");
    const [notify, setNotify] = useState<boolean>(false);
    const [backgroundPos, setBackgroundPos] = useState("center");

    const handleMouseMove = (e: any) => {
        if (!imgRef.current) return;
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    const handleMouseLeave = () => {
        setBackgroundPos("center");
    };



    return (
        <>
            <Banner />
            <Navbar />
            <div className="grid grid-col-1  md:grid-cols-2 py-36 px-5">
                <div className="col-span-1 md:ml-5 ">
                    <div className="flex flex-col-reverse md:flex-row gap-3 items-center sticky top-44">
                        <div className="flex flex-row md:flex-col md:gap-y-1 gap-x-2 ">
                            {ImgArray.map((imgObj, idx) => (
                                <img
                                    key={idx}
                                    src={imgObj.Img}
                                    alt=""
                                    onClick={() => setMainImg(imgObj.Img)}
                                    className="md:w-20 md:h-20 h-10 w-10 object-cover rounded-md mb-4 cursor-pointer "
                                />
                            ))}
                        </div>
                        <div
                            ref={imgRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="md:h-[500px] md:w-[500px] h-[250px] w-full rounded-md border overflow-hidden bg-gray-100 bg-cover md:bg-[length:200%] border-gray-300"
                            style={{
                                backgroundImage: `url(${mainImg})`,
                                backgroundPosition: backgroundPos,
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <img
                                src={mainImg}
                                alt="product_image"
                                className="w-full h-full object-cover " // hides original but keeps size
                            />
                        </div>

                    </div>
                </div>


                <div className="col-span-1">
                    <div className="col-span-1 space-y-10">
                        {/* Title & Category */}
                        <h1 className="text-3xl font-bold mb-2">Nike Running Shoes</h1>
                        <p className="text-sm text-gray-500 mb-4">Category: Footwear / Sports</p>

                        {/* Price */}
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-3xl font-bold text-green-600">₹4,999</p>
                            <p className="line-through text-gray-500">₹6,999</p>
                            <span className="text-orange-600 font-semibold">28% Off</span>
                        </div>

                        {/* Offers */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Available Offers</h2>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>10% Instant Discount on HDFC Bank Credit Cards</li>
                                <li>Buy 2 items & get 5% extra off</li>
                                <li>No Cost EMI starting from ₹500/month</li>
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mb-6 justify-center md:justify-start">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                                Buy Now
                            </button>
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => setNotify(notify == true ? false : true)}
                                className={`  bg-white px-4 py-3 rounded-full font-bold  transition ${notify == true ? "text-white bg-[#991B1B] hover:bg-red-900" : "text-[#991B1B] hover:bg-gray-200" } `}
                                title="Notify me"
                                aria-label="Notify me"
                            >
                                <BellRingIcon/>
                            </button>
                        </div>

                        {/* Tabs */}
                        <div>
                            <div className="flex gap-3 justify-evenly border-b mb-4">
                                {["description", "specifications", "reviews"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={` py-3 text-sm font-medium capitalize border-b-2 transition ${activeTab === tab
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-gray-600 hover:text-blue-500"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="p-4 bg-gray-50 rounded-md">
                                {activeTab === "description" && (
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Product Description</h2>
                                        <p className="text-gray-700">
                                            These Nike Running Shoes are designed for ultimate comfort and
                                            performance. Made with breathable mesh, cushioned soles, and
                                            durable grip, they are perfect for daily runs and casual wear.
                                        </p>
                                    </div>
                                )}

                                {activeTab === "specifications" && (
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                            <li>Material: Mesh + Rubber sole</li>
                                            <li>Color: Black / White</li>
                                            <li>Weight: 250g</li>
                                            <li>Warranty: 6 Months</li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === "reviews" && (
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                                        <div className="space-y-4">
                                            <div className="p-4 border rounded-md">
                                                <p className="font-semibold">⭐️⭐️⭐️⭐️☆</p>
                                                <p className="text-gray-700">
                                                    Great shoes for running! Very comfortable and lightweight.
                                                </p>
                                                <span className="text-sm text-gray-500">- Rahul, Jan 2025</span>
                                            </div>
                                            <div className="p-4 border rounded-md">
                                                <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️</p>
                                                <p className="text-gray-700">
                                                    Excellent build quality. Worth every rupee!
                                                </p>
                                                <span className="text-sm text-gray-500">- Priya, Dec 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <h1 className="font-semibold text-center md:text-left text-2xl px-20 mb-5">Similar Product</h1>
                <div className="px-5 md:px-20 pb-10">
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
                </div>
            
            <Footer />
        </>
    )
}

export default ProdutDetail
