"use client"; // 'use client' 문은 클라이언트 측 자바스크립트 코드임을 나타냅니다.

import Image from "next/image"; // 'Image' 컴포넌트를 'next/image'에서 가져옵니다.

import CustomButton from "./CustomButton"; // 'CustomButton' 컴포넌트를 로컬 파일에서 가져옵니다.

const Hero = () => {
  const handleScroll = () => {
    // 'handleScroll' 함수 정의
    // 이 함수는 나중에 스크롤 이벤트 처리를 위해 사용될 수 있습니다.
  };
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
          {/* 'Image' 컴포넌트를 사용하여 이미지를 렌더링하고 속성을 설정합니다. */}
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
