import ProductMachine from "../../assets/header-pictures/product-machine.png";
import Iphone from "../../assets/header-pictures/iphone.png";
import WaterMachine from "../../assets/header-pictures/water-machine.png";
// import Production from "../../assets/header-pictures/3Production.png";

export default function RightSide() {
  return (
    <section className="relative w-full h-[870px] max-w-[663px] flex justify-between items-end translate-y-[-70px] max-[1200px]:translate-y-0 max-[1200px]:h-[745px] max-[1200px]:max-w-[900px] max-[800px]:h-[650px] max-[650px]:h-130 max-[490px]:h-100">
      {/* Product Machine */}
      <div
        className="absolute left-[-30px]  z-10 max-w-[400px] w-full max-[1200px]:left-16
       max-[900px]:max-w-[380px] max-[900px]:left-11 max-[795px]:max-w-[340px]  max-[755px]:max-w-[300px] max-[685px]:max-w-[270px] max-[685px]:left-10
       max-[655px]:max-w-[270px] max-[615px]:max-w-[270px] max-[615px]:left-6 max-[560px]:max-w-[230px] max-[550px]:left-3 max-[490px]:w-[200px] max-[400px]:left-0
      "
      >
        <img src={ProductMachine} alt="Product machine" className="w-full " />
      </div>

      {/* iPhone */}
      <div
        className="absolute left-[150px] z-30 w-full max-w-[370px] max-[1200px]:left-70
       max-[900px]:max-w-[350px] max-[900px]:left-58 max-[795px]:max-w-[340px] max-[755px]:max-w-[300px] max-[685px]:max-w-[290px] max-[685px]:left-50
       max-[655px]:max-w-[280px] max-[630px]:left-38 max-[560px]:max-w-[230px] max-[550px]:left-32 max-[490px]:w-[190px] max-[450px]:left-26 max-[430px]:left-23 max-[400px]:left-21
       "
      >
        <img src={Iphone} alt="iPhone 13 Pro" className="w-full " />
      </div>

      {/* Water Machine */}
      <div
        className="absolute  right-[-130px] bottom-[-20px] z-20 w-full max-w-[510px]   max-[1200px]:right-[-50px]
       max-[900px]:max-w-[450px] max-[900px]:right-[-40px] max-[795px]:max-w-[390px] max-[755px]:max-w-[350px] max-[685px]:max-w-[320px] max-[685px]:right-[10px]
       max-[655px]:max-w-[340px] max-[655px]:right-[-50px] max-[560px]:max-w-[290px] max-[550px]:right-[-30px] max-[490px]:w-[258px] max-[490px]:right-[-18px] max-[400px]:right-[-56px]
      "
      >
        <img src={WaterMachine} alt="Water machine" className="w-full" />
      </div>
    </section>
    // <section className="tranlate-x-[100px] max-w-[760px] z-3 w-full h-800px overflow-y-hidden flex justify-center items-center">
    //   <img src={Production} alt="three production" />
    // </section>
  );
}
