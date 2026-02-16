import Logo from "../../site/logo"



export default function Navbar(){
    return (
        <section>
            <div><Logo/></div>
            <div><Navigation/></div>
            <div></div>
        </section>
    )
}


function Navigation(){
    return(
        <ul className=" flex ">
            <li>Platforma</li>
            <li>Narxlar</li>
            <li>Imkoniyatlar</li>
            <li>FAQ</li>
            <li>Aloqa</li>
            <li>Dasturchilar</li>
        </ul>
    )
}