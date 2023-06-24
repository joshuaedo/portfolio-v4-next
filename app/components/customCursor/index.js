"use client";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20,
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("scroll", moveCursor);
    // document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("scroll", moveCursor);
      //   document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </div>
  );
}
