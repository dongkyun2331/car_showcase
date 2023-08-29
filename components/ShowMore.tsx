"use client";

import { showMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {};
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
