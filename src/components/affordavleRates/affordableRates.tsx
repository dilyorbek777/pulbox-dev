import { useEffect, useState } from "react";
import Rates from "./rates"
// import { title } from "process";

type Rate = {
    id: number;
    title: string;
}

export default function AffordableRates(){

   const rates: Rate[] = [
    { id: 1, title: "Start" },
    { id: 2, title: "Pro" },
    { id: 3, title: "Business" },
    // { id: "enterprise", title: "Enterprise" },
  ];
    const [isSelected, setIsSelected] = useState<number | null>(null);
    // const [arrayRates, setArrayRates] = useState(rates)
    useEffect(() => {
      const fetchPlans = async () => {
        try {
          const res = await fetch("/api/v1/plan/");
          if (!res.ok) throw new Error("Serverdan xato javob keldi");
    
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.error("Fetch xatosi:", error);
        }
      };
    
      fetchPlans();
    }, []);

    // const rates = [<Rates/>, <Rates/>, <Rates/>]
    return(
        <section className="max-w-291 w-full mx-auto outline-2 flex flex-col gap-20">
            <div className="max-w-132 w-full flex flex-col gap-6 mx-auto outline-3">
                <h1 className="text-[#000000] font-bold text-4xl leading-8 text-center">Qulay tariflar</h1>
                <p  className="text-[#000000] font-medium text-[16px] leading-8 ">Biznesingiz hajmidan kelib chiqqan holda o’zingizga mos tarif tanlang</p>
            </div>
            <div className="w-full flex justify-between h-[534px] items-center outline-1">
                {rates.map((items)=>
                    <Rates key={items.id} items={items} isSelected={isSelected} setIsSelected={setIsSelected}/>
                )}
            </div>
        </section>
    )
}