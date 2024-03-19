import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "./Link/Link";
import { useState } from "react";


function Navbar() {
    const [open, setopen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="text-black p-6 ">
            <div className="md:hidden" onClick={()=> setopen(!open)}>
            {
                open=== true?<IoMdClose></IoMdClose>:<RiMenu2Line></RiMenu2Line>
            }
            
            </div>
            <ul className={`md:flex absolute md:static 
            ${open? '':'hidden'}
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    )
}

export default Navbar
