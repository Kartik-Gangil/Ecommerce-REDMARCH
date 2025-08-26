import { Trash2, Heart } from "lucide-react";
import { useState } from "react";

const CartCard = () => {
    const [qty, SetQTY] = useState<number>(1);

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Image */}
                <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0">
                    <img
                        src="https://static.nike.com/a/images/t_default/3c1f8b0d-2e4a-4b5c-9d6f-7c8e0f1f3b2a/air-force-1-07-lx-shoes-3XJz7H.png"
                        alt="Nike Air Force 1 '07 LX"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 md:px-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Nike Air Force 1 '07 LX
                    </h3>
                    <p className="text-sm text-gray-500">Women's Shoes</p>
                    <p className="text-sm text-gray-500">
                        White/White/Glacier Blue/White
                    </p>
                    <p className="text-sm text-gray-500">Size 3</p>
                </div>

                {/* Price */}
                <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    MRP : ₹ 10,795.00
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center md:justify-start justify-center mt-3 space-x-4">
                {/* Delete Button */}
                <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">
                    <Trash2 className="w-4 h-4 text-gray-700" />
                </button>

                {/* Quantity */}
                <div className="flex items-center border rounded-lg px-2 py-1">
                    <button className="px-2 text-lg font-bold" onClick={() => {
                        if (qty > 1) SetQTY(qty - 1);
                    }}>-</button>
                    <span className="px-2">{qty}</span>
                    <button className="px-2 text-lg font-bold" onClick={() => {
                        if (qty < 1) SetQTY(qty + 1);
                    }}>+</button>
                </div>

                {/* Wishlist */}
                <button className="flex items-center justify-center w-8 h-8">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-600" />
                </button>
            </div>
        </div>
    );
};

export default CartCard;
