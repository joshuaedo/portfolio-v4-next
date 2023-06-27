"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Loader() {
  return <></>;
}

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export function HomeLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    setTimeout(() => {
      setIsSpinning(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="text-xl sticky inset-x-0 top-0 h-[100vh] z-50 bg-black tracking-widest">
            <div className="h-screen flex justify-center items-center">
              <>
                {isSpinning ? (
                  <div className="header-text text-white flex">
                    <span>‘</span>
                    <Number n={100} />
                  </div>
                ) : (
                  <div className="me">
                    <Image
                      src="/images/=).png"
                      width={200}
                      height={200}
                      alt="=)"
                    />
                  </div>
                )}
              </>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
