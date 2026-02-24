import { useEffect, useState } from "react";
import Rates from "./rates";
// import { title } from "process";

type Rate = {
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
  const [isSelected, setIsSelected] = useState<string|number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [arrayRates, setArrayRates] = useState(rates)
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.pulbox.uz/api/v1/plan/");
        if (!res.ok) throw new Error(`Server xatosi: ${res.status}`);

        const data = await res.json();
        return setRatesData(data.results ?? []);
      } catch (error) {
        console.error("Fetch xatosi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-xl text-gray-600">Tariflar yuklanmoqda...</p>
        </div>
      ) : (
        <div className="max-w-291 w-full mx-auto outline-2 flex flex-col gap-20">
          <div className="max-w-132 w-full flex flex-col gap-6 mx-auto outline-3">
            <h1 className="text-[#000000] font-bold text-4xl leading-8 text-center">
              Qulay tariflar
            </h1>
            <p className="text-[#000000] font-medium text-[16px] leading-8 ">
              Biznesingiz hajmidan kelib chiqqan holda o’zingizga mos tarif
              tanlang
            </p>
          </div>
          <div
            className={`w-full flex h-[534px] items-center outline-1 ${ratesData.length <= 2 ? "justify-around" : "justify-between"}`}
          >
            {ratesData.map((items) => (
              <Rates
                key={items.id}
                items={items}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
