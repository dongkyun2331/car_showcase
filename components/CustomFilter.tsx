"use client"; // 클라이언트 측 자바스크립트 코드를 나타냅니다.

import { Fragment, useState } from "react"; // React 컴포넌트와 useState 훅을 가져옵니다.
import Image from "next/image"; // 'next/image'를 가져와서 이미지를 렌더링합니다.
import { useRouter } from "next/navigation"; // Next.js의 라우팅을 위한 'useRouter'를 가져옵니다.
import { Listbox, Transition } from "@headlessui/react"; // Headless UI의 Listbox 및 Transition 컴포넌트를 가져옵니다.
import { CustomFilterProps } from "@/types"; // 'CustomFilterProps' 타입을 '@/types'에서 가져옵니다.
import { updateSearchParams } from "@/utils"; // 유틸리티 함수를 가져옵니다.

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]); // 선택된 옵션을 상태로 관리

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter; // 'CustomFilter' 컴포넌트를 내보냅니다.
