import Button from "./button"

function ProductCard() {
    return (
        <div className="flex flex-col w-[348px] shadow-xl rounded-3xl overflow-hidden mb-5">
            <img
                className="w-full h-[200px] bg-center bg-contain  overflow-hidden object-cover"
                src="https://picsum.photos/200/300"
                alt="" />
            <div className="flex flex-col p-6 gap-3 ">
                <h3 className="font-bold text-lg">Car wash pro max</h3>
                <p className="text-[12px] text-[#4B5563]">Avtomobillarni yuvish shoxobchalari uchun to'liq avtomatlashtirilgan boshqaruv tizimi.</p>
                <a href="#">
                    <Button btntype="primary" className="w-full my-2 rounded-[25px]" text="Batafsil" />
                </a>
            </div>
        </div>
    )
}

export default ProductCard