import LeftSide from "./leftSide"
import RightSide from "./rightSide"

export default function Header(){
    return(
        <div className="max-w-[1263px] w-full outline-2 mx-auto my-0 mt-30 flex justify-between mt-[170px]">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}