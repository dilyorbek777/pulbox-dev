import { useState, useEffect } from "react"
import Button from "./button"
import Logo from "./logo"


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
    const changeNavBg = () => {
        window.scrollY <= 5 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            console.log('removed');

        }
    }, [])
    return (
        <div className={`flex fixed top-0 h-[103px] left-0 right-0 z-50 justify-center items-center px-[120px] py-[35px]  w-full mx-auto transition-all duration-300 ${navBg ? 'bg-transparent' : 'bg-white'}`}>
            <div className="max-w-[1440px] w-full flex justify-between  items-center">
                <Logo />
                <ul className="links flex gap-[48px] items-center justify-center text-lg font-sans font-semibold ">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <Button text="Bog’lanish" btntype="primary" className="text-lg" />
            </div>
        </div>
    )
}

export default Navbar