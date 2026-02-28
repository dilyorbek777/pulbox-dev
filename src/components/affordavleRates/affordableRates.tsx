"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Rates from "./rates";

export type Rate = {
  id: number | string;
  title: string;
  is_popular: boolean;
  period: string;
  price: string;
  button_text: string;
  subtitle: string;
  features: { id: string; name: string }[];
};

export default function AffordableRates() {
  const [ratesData, setRatesData] = useState<Rate[]>([]);
  const [isSelected, setIsSelected] = useState<string | number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.pulbox.uz/api/v1/plan/");
        if (!res.ok) throw new Error(`Server xatosi: ${res.status}`);

        const data = await res.json();
        setRatesData(data.results ?? []);
        console.log(data);
      } catch (error) {
        console.error("Fetch xatosi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const OPTIONS = {
    loop: true,
    align: "start" as const,
    dragFree: false,
    slidesToScroll: 1,
  };

  const [emblaRef] = useEmblaCarousel(OPTIONS);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl text-gray-600">Tariflar yuklanmoqda...</p>
      </div>
    );
  }

  if (ratesData.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">Tariflar topilmadi</div>
    );
  }

  // Cheksiz aylanish uchun kamida 2 marta takrorlaymiz
  const duplicatedRates = [...ratesData, ...ratesData];

  return (
    <div className="max-w-291 w-full mx-auto flex flex-col gap-20 px-4 sm:px-6 lg:px-8 ">
      {/* Sarlavha qismi */}
      <div className="max-w-132 w-full flex flex-col gap-6 mx-auto text-center">
        <h1 className="text-[#000000] font-bold text-4xl leading-8">
          Qulay tariflar
        </h1>
        <p className="text-[#000000] font-medium text-[16px] leading-8">
          Biznesingiz hajmidan kelib chiqqan holda o’zingizga mos tarif tanlang
        </p>
      </div>

      {/* Karusel */}
      <div
        className="embla overflow-hidden h-150 py-8 outline-1 "
        ref={emblaRef}
      >
        <div
          className="
            embla__container 
            flex 
            -ml-4 sm:-ml-6 lg:-ml-8
          "
        >
          {duplicatedRates.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
              flex items-center
                embla__slide
                pl-4 sm:pl-6 lg:pl-8
                flex-[0_0_85%]           // mobil: ~1 ta
                min-w-0
                sm:flex-[0_0_50%]        // sm+: ~2 ta
                lg:flex-[0_0_33.333%]    // lg+: roppa-rosa 3 ta
              "
            >
              <div className="w-full rounded-2xl border border-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white overflow-hidden">
                <Rates
                  items={item}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
