import Button from "../site/button"

export default function LeftSide(){
    return(
        <section className="max-w-[530px] w-full ">
            <div>
                <h1 className="text-[60px] font-[700] text-[#000000]">O'z-o'ziga xizmat ko'rsatish uchun 
                    <span className="bg-gradient-to-r from-[#1564F6] to-[#03B485] bg-clip-text text-transparent"> only  </span> <span className="bg-gradient-to-r from-[#1564F6] to-[#03B485] bg-clip-text text-transparent">tranzaksiyalar</span> va aqlli monitoring
                </h1>
            </div>
            <div>
                <p>Hayot uchun oson va samarali echimlar. Pulbox bilan oson va xavfsiz. Biznesingizni masofadan boshqaring va daromadingizni oshiring.</p>
            </div>
            <div>
                <Button btntype="primary" text="Get Started" />
            </div>
        </section>
    )
}