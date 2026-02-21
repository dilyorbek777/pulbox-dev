import { useState, useEffect } from "react"
import Button from "./button"
import Logo from "./logo"
import { FaAlignJustify } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


function Navbar() {
    const links = [
        {
            label: "Platforma",
            href: "/platforms"
        },
        {
            label: "Narxlar",
            href: "/price"
        },
        {
            label: "Imkoniyatlar",
            href: "/opportunities"
        },
        {
            label: "FAQ",
            href: "/faq"
        },
        {
            label: "Aloqa",
            href: "/contact"
        }, {
            label: "Dasturchilar",
            href: "/developers"
        }
    ]
    const [navBg, setNavBg] = useState(false);
    const [btn, setBtn] = useState(false);
    const changeNavBg = () => {
       return window.scrollY <= 5 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        
    }, [])
    return (
        <div className={`flex max-md:px-6 max-md:py-5 fixed  top-0 h-[103px] left-0 right-0 z-50 justify-center items-center px-[120px] max-[1140px]:px-6 py-[35px]  w-full mx-auto transition-all duration-300 ${navBg ? 'bg-transparent' : 'bg-white'}`}>
            <div className="max-w-[1440px]  gap-5 w-full flex justify-between  items-center">
                <Logo />
                <div className={`nav-links max-w-[950px] w-full max-[1140px]:max-w-[600px]  flex items-center justify-between ${btn ? 'max-md:flex absolute top-0 left-0 right-0 bottom-0 flex-col gap-5 h-screen items-center justify-center w-full max-md:max-w-[768px] -z-10 bg-secondary'  : 'max-md:hidden'}`}>
                    <ul className="links  flex gap-[38px] items-center justify-between text-lg font-sans  max-lg:text-[15px] max-lg:gap-[10px] max-md:flex-col max-md:gap-5 font-semibold ">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="font-inter tracking-wider">{link.label}</a>
                            </li>
                        ))}

                    </ul>
                    <Button text="Bog’lanish" btntype="primary" className="font-inter text-lg" />

                </div>

                {btn ? <button onClick={() => setBtn(!btn)} className="text-lg md:hidden"><FaXmark /></button> : <button onClick={() => setBtn(!btn)} className="text-lg md:hidden"><FaAlignJustify /></button>}

            </div>
        </div>
    )
}

export default Navbar