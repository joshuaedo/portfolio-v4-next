"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isStain, setIsStain] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
      setIsStain(false);
    };

    const handleMouseLeave = () => {
      setIsStain(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("onwheel", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("onwheel", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cursorStyle = {
    transform: `translate3d(${mousePosition.x - 25}px, ${
      mousePosition.y - 25
    }px, 0)`,
    transition: "transform 0.15s",
  };

  return (
    <>
      {isStain ? (
        <Image
          src="/images/stain.png"
          width={90}
          height={90}
          className="hidden md:flex fixed w-[70px] h-[70px] transition mix-blend-difference backdrop-filter backdrop-grayscale z-20 pointer-events-none"
          style={cursorStyle}
          alt="stain"
        />
      ) : (
        <div
          className="hidden md:flex fixed w-[50px] h-[50px] rounded-full bg-white transition mix-blend-difference backdrop-filter backdrop-grayscale z-20 pointer-events-none"
          style={cursorStyle}
        />
      )}
    </>
  );
};

export default Cursor;
