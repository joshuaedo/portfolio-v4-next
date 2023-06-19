"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    transform: `translate3d(${mousePosition.x - 25}px, ${
      mousePosition.y - 25
    }px, 0)`,
    transition: "transform 0.1s",
  };

  return (
    <div
      className="hidden md:flex fixed w-[50px] h-[50px] rounded-full bg-white transition mix-blend-difference backdrop-filter backdrop-grayscale z-20 pointer-events-none"
      style={cursorStyle}
    />
  );
};

export default Cursor;
