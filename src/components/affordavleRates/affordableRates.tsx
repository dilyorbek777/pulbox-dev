import Rates from "./rates"

export default function AffordableRates(){
    return(
        <section className="max-w-291 w-full mx-auto outline-2 flex flex-col gap-20">
            <div className="max-w-132 w-full flex flex-col gap-6 mx-auto outline-3">
                <h1 className="text-[#000000] font-bold text-4xl leading-8 text-center">Qulay tariflar</h1>
                <p  className="text-[#000000] font-medium text-[16px] leading-8 ">Biznesingiz hajmidan kelib chiqqan holda o’zingizga mos tarif tanlang</p>
            </div>
            <div>
                <Rates/>
            </div>
        </section>
    )
}