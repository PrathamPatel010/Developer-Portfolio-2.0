import Link from "next/link";
import React from "react";

const NavLinks = ({title,href}) => {
    return(
        <>
            <Link href={href}
                  className={'block py-2 pl-3 pr-4 md:p-0 text-[#ADB7BE] sm:text-xl rounded hover:text-white'}>
                {title}
            </Link>
        </>
    )
}

export default NavLinks;