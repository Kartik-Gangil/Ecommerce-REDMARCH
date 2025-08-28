import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection"; // import the hook

const messages = [
  "🔥 Cash ON Delivery",
  "🔥 10% OFF on First Purchase | Use Code : FIRST10",
  "🔥 10 days Return Exchange",
  "🔥 Free Shipping",
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -60 : 0 }} // slide up when scrolling down
      transition={{ duration: 0.3 }}
      className="bg-red-800 z-50 w-full fixed top-0 flex justify-center items-center text-white text-center px-4 py-1 text-sm font-medium overflow-hidden h-14 md:h-10"
    >
      <div className="relative w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Banner;
