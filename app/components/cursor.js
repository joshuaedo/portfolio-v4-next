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
    transform: `translate(${mousePosition.x - 20}px, ${
      mousePosition.y - 20
    }px)`,
    transition: "transform 0.1s",
  };

  return (
    <div
      className="cursor hidden md:inline fixed w-12 h-12 rounded-full bg-white transition mix-blend-difference backdrop-filter backdrop-grayscale"
      style={cursorStyle}
    />
  );
};

export default Cursor;
