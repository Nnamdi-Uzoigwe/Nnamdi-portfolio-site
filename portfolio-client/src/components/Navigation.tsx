// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navigation() {
//     const [active, setActive] = useState("about")
//     return (
//         <div className="bg-[#373636] z-20 w-full lg:w-fit py-[24px] lg:py-[16px] border-1 border-[#737373] fixed bottom-0 lg:sticky flex justify-center lg:justify-start gap-2 lg:gap-10 rounded-b-0 lg:rounded-b-[12px] rounded-t-[12px] lg:rounded-t-[12px] px-[24px]">
//             <Link to="/" onClick={() => setActive("about")} className={`${active === "about" ? "text-[#faa300]" : "text-white"}`}>About</Link>
//             <Link to="/works" onClick={() => setActive("works")} className={`${active === "works" ? "text-[#faa300]" : "text-white"}`}>Works</Link>
//             <Link to="/resume" onClick={() => setActive("resume")} className={`${active === "resume" ? "text-[#faa300]" : "text-white"}`}>Resume</Link>
//             <Link to="/contact" onClick={() => setActive("contact")} className={`${active === "contact" ? "text-[#faa300]" : "text-white"}`}>Contact</Link>
//         </div>
//     )
// }

import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="bg-[#373636] z-20 w-full lg:w-fit py-[24px] lg:py-[16px] border-1 border-[#737373] fixed bottom-0 lg:sticky flex justify-center lg:justify-start gap-2 lg:gap-10 rounded-b-0 lg:rounded-b-[12px] rounded-t-[12px] lg:rounded-t-[12px] px-[24px]">
            <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                    `${isActive ? "text-[#faa300]" : "text-white"}`
                }
            >
                About
            </NavLink>
            <NavLink 
                to="/works" 
                className={({ isActive }) => 
                    `${isActive ? "text-[#faa300]" : "text-white"}`
                }
            >
                Works
            </NavLink>
            <NavLink 
                to="/resume" 
                className={({ isActive }) => 
                    `${isActive ? "text-[#faa300]" : "text-white"}`
                }
            >
                Resume
            </NavLink>
            <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                    `${isActive ? "text-[#faa300]" : "text-white"}`
                }
            >
                Contact
            </NavLink>
        </div>
    )
}