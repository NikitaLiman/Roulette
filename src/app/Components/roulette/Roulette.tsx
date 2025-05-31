"use client";
import React from "react";
import Styles from "./sass/Roulette.module.scss";
import BlackVector from "@/app/img/Vector.svg";
import WhiteVector from "@/app/img/Vector (1).svg";
import ClownVector from "@/app/img/Originals icons.svg";
import Image from "next/image";

export const Roulette: React.FC = () => {
  const rouletteItems = [
    { icon: WhiteVector, backgroundColor: "#343843", multiplier: "2x", id: 0 },
    { icon: BlackVector, backgroundColor: "#FF4242", multiplier: "5x", id: 1 },
    { icon: ClownVector, backgroundColor: "#47FF69", multiplier: "10x", id: 2 },
  ];

  const trackRef = React.useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = React.useState<boolean>(false);
  const [currentPosition, setCurrentPosition] = React.useState<number>(0);
  const [countdown, setCountdown] = React.useState<number>(60);
  const [winner, setWinner] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState<boolean>(false);

  const initWheel = React.useCallback(() => {
    if (!trackRef.current || isSpinning) return;

    setIsSpinning(true);
    setWinner(null);
    setShowResult(false);

    const itemWidth = 108;
    const gap = 8;
    const totalItemWidth = itemWidth + gap;
    const totalItems = rouletteItems.length;

    const selectedWinner = Math.floor(Math.random() * totalItems);
    setWinner(selectedWinner);

    const minFullCycles = 5;
    const additionalDistance = Math.random() * totalItems * totalItemWidth;

    const centerItemOffset =
      (trackRef.current.parentElement!.offsetWidth - itemWidth) / 2;
    const targetPosition = -(
      selectedWinner * totalItemWidth -
      centerItemOffset
    );

    const totalDistance =
      currentPosition -
      minFullCycles * totalItems * totalItemWidth -
      additionalDistance +
      (targetPosition % (totalItems * totalItemWidth));

    trackRef.current.style.transition =
      "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
    trackRef.current.style.transform = `translateX(${totalDistance}px)`;

    setTimeout(() => {
      setCurrentPosition(totalDistance);
      setIsSpinning(false);
      setShowResult(true);

      setTimeout(() => {
        setShowResult(false);
      }, 3000);
    }, 4000);
  }, [isSpinning, currentPosition, rouletteItems]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev: number) => {
        if (prev === 1) {
          initWheel();
          return 65;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initWheel]);

  React.useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentPosition}px)`;
    }
  }, []);

  return (
    <div className={Styles.Roulette}>
      <div className={Styles.wheelContainer}>
        <div className={Styles.wheel}>
          <div ref={trackRef} className={Styles.track}>
            {[...Array(30)].map((_, copyIndex) =>
              rouletteItems.map((item, index) => (
                <div
                  key={`${copyIndex}-${index}`}
                  className={Styles.item}
                  style={{
                    backgroundColor: item.backgroundColor,
                  }}
                >
                  <Image src={item.icon} alt={`Item ${index}`} />
                </div>
              ))
            )}
          </div>
        </div>
        {showResult && winner !== null && (
          <div className={Styles.resultOverlay}>
            <div
              style={{
                backgroundColor: rouletteItems[winner].backgroundColor,
              }}
              className={Styles.resultContent}
            >
              <div className={Styles.resultIcon}>
                <Image src={rouletteItems[winner].icon} alt="Winner" />
              </div>
              <div className={Styles.resultText}>
                <div className={Styles.resultLabel}>WINNER!</div>
                <div className={Styles.resultMultiplier}>
                  {rouletteItems[winner].multiplier}
                </div>
              </div>
            </div>
          </div>
        )}
        {isSpinning ? null : (
          <div className={Styles.filter}>
            <div className={Styles.countdown}>
              <p>ROLLING IN:</p>
              <span>{countdown}</span>
            </div>
          </div>
        )}
      </div>
      <div className={Styles.pointer}></div>
    </div>
  );
};
