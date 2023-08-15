"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          빠르고 쉽게 자동차를 찾고, 예약하고, 렌트하세요!
        </h1>

        <p className="hero__subtitle">
          간편한 예약 절차를 통해 렌터카 경험을 간소화하세요.
        </p>

        <CustomButton
          title="자동차 탐색"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
