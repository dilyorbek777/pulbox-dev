import ProductMachine from "../../assets/header-pictures/product-machine.png"
import Iphone from "../../assets/header-pictures/iphone.png"
import WaterMachine from "../../assets/header-pictures/water-machine.png"


export default function RightSide(){
    return(
        <section className="max-w-[663px] w-full flex relative  m-1 translate-y-[-80px]">
            <div className="max-w-[400px] w-full absolute z-1 bottom-[-100px]">
                <img src={ProductMachine} alt="Product machine" />
            </div>
            <div className="max-w-[370px] w-full absolute z-3 left-[180px]">
                <img src={Iphone} alt="iphone 13 pro" />
            </div>
            <div className="max-w-[712px] w-full absolute z-2 left-[310px] bottom-[-120px]">
                <img src={WaterMachine} alt="water machine" />
            </div>
        </section>
    )
}