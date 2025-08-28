import { useNavigate } from "react-router-dom";

interface Product {
    title?: string; // to showcase the category title
    index: number;
    name?: string; // to showcase the product name
    price?: string;
    image: string;
    originalPrice?: string;
    Route?:string  // Optional, used for new arrivals
}

const ProductCard: React.FC<Product> = ({ Route, title, index, name, price, image, originalPrice }) => {
    const Navigate = useNavigate();
    return (
        <div onClick={() => {Route ?Navigate(Route) : console.log("No Route Provided")}}>
            <div key={index} className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-square bg-gray-800 rounded-xl mb-4 overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    {title && <h3 className="text-3xl text-center font-semibold mb-2">{title}</h3>}
                    {name && <h3 className="text-xl font-semibold mb-2">{name}</h3>}

                    <div className="flex flex-row gap-2 items-center">
                        {price && <p className={`text-lg font-bold ${originalPrice ? "text-red-800" : "text-red-300"}`}>₹ {price}</p>}
                        {originalPrice && <p className="text-gray-500 line-through text-sm">₹ {originalPrice}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
