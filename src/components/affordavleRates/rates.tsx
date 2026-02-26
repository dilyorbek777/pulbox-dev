// import { useEffect } from "react";
// import { useState } from "react";



import { type Dispatch, type SetStateAction } from "react";
type Features = {
  id: string;
  name: string;
};

type Rate = {
  id: string | number;
  title: string;
  features: Features[];
  period: string;
  price: string;
  subtitle: string;
  // agar boshqa maydonlar bo'lsa, shu yerga qo'shing masalan:
  // price?: string;
  // features?: string[];
};
interface RatesProps {
  items: Rate; // ← bitta Rate obyekti (array emas!)
  isSelected: string | number | null;
  setIsSelected: Dispatch<SetStateAction<string | number | null>>;
  // agar index yoki id orqali boshqarilayotgan bo'lsa, quyidagicha bo'lishi mumkin:
  // onSelect: () => void;
}

export default function Rates({
  items,
  isSelected,
  setIsSelected,
}: RatesProps) {
  // const [isSelected, setIsSelected] = useState(false);
  const { id, title, period, price, subtitle } = items;

  return (
    <div
      onClick={() => {
        if (isSelected === id) {
          setIsSelected(null);
        } else {
          setIsSelected(id);
        }
      }}
      className={`
        group
        cursor-pointer
        transition-all duration-300
        max-w-93 w-full
        [&_h]:leading-8 [&_p]:leading-8
        text-[#000000]
        py-8 px-6
        rounded-[20px]
        flex flex-col justify-between
        ${
          isSelected === items.id
            ? "h-[534px] outline outline-2 outline-[#17BE86] shadow-[0_5px_50px_15px_rgba(23,190,134,0.4)]"
            : "h-116 outline outline-[#4B5563] hover:h-[534px] hover:outline-[#17BE86] hover:outline-2 hover:shadow-[0_5px_50px_15px_rgba(23,190,134,0.4)]"
        }
      `}
    >
      <div>
        <h5 className="font-bold text-[20px]">{title}</h5>
        <p className="font-medium text-[15px] mb-6">{subtitle}</p>
        <h2 className="font-bold text-[32px] mb-6">
          {price} uzs/{period}
        </h2>
        <div className="max-w-81 w-full flex flex-col px-6  [&_p]:text-[16px] font-medium">
          {items.features.map((features) => {
            return <p key={id}>{features.name}</p>;
          })}
        </div>
      </div>

      <button
        className={`
          mx-auto max-w-81 w-full
          text-[18px] leading-100%
          py-[10px]
          flex justify-center items-center
          rounded-[10px]
          border-2
          transition-colors
          ${
            isSelected === items.id
              ? "bg-[#17BE86] text-[#FFFFFF] border-[#17BE86]"
              : "text-[#17BE86] border-[#17BE86] group-hover:bg-[#17BE86] group-hover:text-[#FFFFFF]"
          }
        `}
      >
        Bog'lanish
      </button>
    </div>
  );
}
