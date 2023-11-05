"use client"; // 클라이언트 측 자바스크립트 코드를 나타냅니다.

import { useState } from "react"; // React 훅 중 하나인 useState를 가져옵니다.
import Image from "next/image"; // 'next/image'를 가져와서 이미지를 렌더링합니다.

import { CarProps } from "@/types"; // 'CarProps' 타입을 '@/types'에서 가져옵니다.
import CustomButton from "./CustomButton"; // 로컬에서 'CustomButton' 컴포넌트를 가져옵니다.
import { calculateCarRent, generateCarImageUrl } from "@/utils"; // 유틸리티 함수들을 가져옵니다.
import CarDetails from "./CarDetails"; // 'CarDetails' 컴포넌트를 가져옵니다.

interface CarCardProps {
  car: CarProps; // 'car' 객체가 'CarProps' 타입임을 선언합니다.
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car; // 'car' 객체 속성 분해

  const [isOpen, setIsOpen] = useState(false); // 모달 창 열림 여부를 상태로 관리

  const carRent = calculateCarRent(city_mpg, year); // 자동차 렌트료를 계산

  return (
    <div className="car-card group">
      {" "}
      {/* 자동차 카드 컨테이너 */}
      <div className="car-card__content">
        {" "}
        {/* 자동차 정보 제목 */}
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        {" "}
        {/* 렌트료 표시 */}
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        {" "}
        {/* 자동차 이미지 */}
        <Image
          src={generateCarImageUrl(car)} // 자동차 이미지 URL 생성
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        {" "}
        {/* 자동차 상세 정보 */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* 변속기, 구동방식, 연비 정보 */}
        </div>
        <div className="car-card__btn-container">
          {" "}
          {/* 'View More' 버튼 */}
          <CustomButton
            title="View More" // 버튼 텍스트
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue" // 버튼 스타일
            textStyles="text-white text-[14px] leading-[17px] font-bold" // 텍스트 스타일
            rightIcon="/right-arrow.svg" // 오른쪽 화살표 아이콘
            handleClick={() => setIsOpen(true)} // 'View More' 버튼 클릭 시 모달 오픈
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen} // 모달 오픈 여부
        closeModal={() => setIsOpen(false)} // 모달 닫기
        car={car} // 자동차 정보 전달
      />
    </div>
  );
};

export default CarCard; // 'CarCard' 컴포넌트를 내보냅니다.
