import Button from "./button"
import Image from "./image";



function ProductCard({ image, type, title, description, category }: { type: string; image: string, title: string, description: string, category: string }) {
    let maxLength = 200
    return (
        <div className="hover:scale-[1.1] transition-all flex mx-auto flex-col max-[880px]:w-[330px] max-md:w-[324px] max-sm:w-[300px] w-[384px] shadow-xl rounded-3xl overflow-hidden mb-5">
            {type === "image" ? <Image
                className="w-full h-[200px] bg-center bg-contain  overflow-hidden object-cover"
                src={image}
                alt={title} /> : <video autoPlay loop className="" src={image} />}
            <div className="flex flex-col p-6 gap-3 font-inter">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-[12px] text-[#4B5563]">{description.length >= maxLength ? description.slice(0, maxLength) + "..." : description}</p>
                <a href={category}>
                    <Button btntype="primary" className="w-full my-2 rounded-[25px] py-2.5" text="Batafsil" />
                </a>
            </div>
        </div>
    )
}

export default ProductCard