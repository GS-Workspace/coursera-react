import { useState, useRef, useEffect } from 'react'

const useNavScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current > currentScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
    return isVisible
}

export {
    useNavScroll
}
