
export default function Rates (){
    return (
        <div className="group hover:h-[534px] hover:outline-[#17BE86] hover:outline-2 hover:shadow-[0_5px_50px_15px_rgba(23,190,134,0.4)] transition-all duration-300 max-w-93 w-full [&_h]:leading-8 [&_p]:leading-8 h-116  text-[#000000] py-8 px-6 outline outline-[#4B5563] rounded-[20px] flex flex-col justify-between">
            <div>
                <h5 className="font-bold text-[20px] ">Start</h5>
                <p className="font-medium text-[15px] mb-6">Kichik bizneslar uchun</p>
                <h2 className=" font-bold text-[32px] mb-6">000/oy</h2>
                <div className="max-w-81 w-full flex flex-col px-6 outline-2 [&_p]:text-[16px] font-medium  ">
                    <p>1 - 5 qurilma</p>
                    <p> Real-time monitoring</p>
                    <p>Basic hisobotlar</p>
                </div>
            </div>
            <button className=" mx-auto max-w-81 w-full text-[18px] leading-100% text-[#17BE86] py-[10px] flex justify-center items-center  border-[#17BE86] rounded-[10px] border-[2px] 
                 group-hover:bg-[#17BE86] group-hover:text-[#FFFFFF]  
            "> 
                Bog'lanish
            </button>
        </div>
    )
}