"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
      setIsVisible(true);
    };

    const handleScroll = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cursorStyle = {
    transform: `translate3d(${mousePosition.x - 25}px, ${
      mousePosition.y - 25
    }px, 0)`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 0.15s, opacity 0.15s",
  };

  return (
    <div
      className="hidden md:flex fixed w-[50px] h-[50px] rounded-full bg-white transition mix-blend-difference backdrop-filter backdrop-grayscale z-20 pointer-events-none"
      style={cursorStyle}
    />
  );
};

export default Cursor;
