import Logo from "../../site/logo"



export default function Navbar(){
    return (
        <section className="flex justify-between w-full max-w-1220px outline m-[20px] ">
            <div><Logo/></div>
            <div><Navigation/></div>
            <div></div>
        </section>
    )
}


function Navigation(){
    return(
        <ul className="flex justify-between">
            <li>Platforma</li>
            <li>Narxlar</li>
            <li>Imkoniyatlar</li>
            <li>FAQ</li>
            <li>Aloqa</li>
            <li>Dasturchilar</li>
        </ul>
    )
}