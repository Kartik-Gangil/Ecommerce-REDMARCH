import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🔥 Cash ON Delivery",
  "🔥 10% OFF on First Purchase | Use Code : FIRST10",
  "🔥 10 days Return Exchange",
  "🔥 Free Shipping",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-800 z-50 w-full fixed flex justify-center items-center text-white text-center px-4 py-1 text-sm font-medium overflow-hidden h-14 md:h-10">
      <div className="relative w-full flex items-center justify-center">
        <AnimatePresence mode="wait">

          <motion.span
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;
