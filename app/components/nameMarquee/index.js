"use client";
import styles from "./style.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

export default function NameMarquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.2 * direction;
  };

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>
            <b>Edo</b> • Joshua • <i>THOMAS</i> • Akpan •{" "}
            <span className={kalam.className}>ANIEKAN</span> • =) •
          </p>
          <p ref={secondText}>
            <b>Edo</b> • Joshua • <i>THOMAS</i> • Akpan •{" "}
            <span className={kalam.className}>ANIEKAN</span> • =) •
          </p>
        </div>
      </div>
    </main>
  );
}

