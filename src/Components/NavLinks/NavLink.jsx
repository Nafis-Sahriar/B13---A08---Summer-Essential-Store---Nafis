"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


const NavLink = ({href, children}) => {

    const pathName = usePathname();

    let isActive = href===pathName;

    

    

    return (
        
            <Link href={href} className={`${isActive? "border-b-2  font-bold text-orange-600 border-orange-600" : ""}`}>

                {children}

            </Link>
       
    );
};

export default NavLink;