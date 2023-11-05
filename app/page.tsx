"use client";

import { useEffect, useState } from "react";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import Image from "next/image";

export default function Home() {
  // 모든 자동차 목록을 저장하기 위한 상태
  const [allCars, setAllCars] = useState([]);
  // 로딩 상태를 나타내는 상태
  const [loading, setLoading] = useState(false);

  // 제조사와 모델을 위한 검색 상태
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // 연료 종류와 생산 연도를 위한 필터 상태
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // 표시되는 자동차 수를 제한하기 위한 페이지네이션 상태
  const [limit, setLimit] = useState(10);

  // 검색 및 필터 기준에 따라 자동차를 가져오는 함수
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 검색 또는 필터 기준이 변경될 때 getCars 함수를 호출하는 useEffect
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  // 데이터가 없거나 오류가 발생했을 때 사용할 상태
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">자동차 카탈로그</h1>
          <p>당신이 좋아할만한 자동차를 탐색하십시오</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            {/* 연료 종류 및 생산 연도를 위한 커스텀 필터 */}
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                // 각 자동차에 대한 CarCard 컴포넌트 렌더링
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                {/* 로딩 스피너 표시 */}
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              죄송합니다. 결과가 없습니다.
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
