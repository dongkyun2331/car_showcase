"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  // 제조업체 배열을 필터링하여 새로운 배열에 저장하는 부분입니다.
  const filteredManufacturers =
    query === "" // 검색어(query)가 비어있는 경우
      ? manufacturers // 원래 제조업체 배열을 그대로 사용합니다.
      : manufacturers.filter(
          (item) =>
            // 검색어(query)가 비어있지 않은 경우, 제조업체 배열을 필터링합니다.
            item
              .replace(/\s+/g, "") // 모든 공백을 제거합니다.
              .includes(query.replace(/\s+/g, ""))
          // 변환한 제조업체 이름에 변환한 검색어가 포함되어 있는지 확인합니다.
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="폭스바겐"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {/* 검색 결과가 없고 검색어가 비어있지 않을 경우 */}
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  검색 "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `
relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
