import LeftSide from "./leftSide";
import RightSide from "./rightSide";
// import ProductMachine from "../../assets/header-pictures/product-machine.png";
// import Iphone from "../../assets/header-pictures/iphone.png";
// import WaterMachine from "../../assets/header-pictures/water-machine.png";
// import bgRight from "../../assets/header-pictures/backgroundRight.png";
export default function Header() {
  return (
    <div
      className="max-w-[1263px] h-[811px]  sm:max-w-[1263px] m-auto mt-28px p-3
    w-full  sm:mt-[100px] flex flex-row overflow-y-hidden overflow-x-hidden
    max-[1200px]:flex-col items-center max-[1200px]:h-[1250px] justify-between max-[1000px]:mt-32 max-[800px]:h-[1220px] max-[740px]:h-265 max-[650px]:h-240 max-[490px]:h-235"
    >
      <LeftSide />
      <RightSide />
      {/* <div className="absolute m-auto z-[1] max-w-[1400px] w-full  hidden max-[1200px]:block  ">
        <img src={bgRight} alt="svsrvs"  className="w-full"/>
      </div> */}
    </div>
   
  );
}
