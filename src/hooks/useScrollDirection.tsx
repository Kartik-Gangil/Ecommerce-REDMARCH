import { useEffect, useState } from "react";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setScrollDirection("down"); // scrolling down
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up"); // scrolling up
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);

    return scrollDirection;
};

export default useScrollDirection;
