"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "@/app/components/NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";
import Image from "next/image";

const Navbar = () => {
    const navLinks = [
        {
            title: 'Experience',
            href: '#experience',
        },
        // {
        //     title: 'Contribution',
        //     href: '#contribution',
        // },
        {
            title: 'Skills',
            href: '#skills'
        },
        {
            title: 'Projects',
            href: '#projects'
        },
        // {
        //     title: 'Blogs',
        //     href: '#blogs'
        // },
        {
            title: 'Connect',
            href: '#connect'
        },
        {
            title: 'Socials',
            href: '#socials'
        },
    ];

    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className={'fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80'}>
            <div className={'flex flex-wrap items-center justify-between mx-auto mt-3 px-5'}>
                <Link href={"/"} className={'text-5xl text-white font-semibold'}>
                    <Image className={'rounded-full'} width={70} height={70} src={'/images/iconPhoto.png'} alt={'logo-photo'} />
                </Link>

                <div className={'mobile-menu block md:hidden'}>
                    {!navBarOpen ? (
                        <button onClick={() => setNavBarOpen(true)} className={'text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'}>
                            <Bars3Icon className={'h-5 w-5'} />
                        </button>
                    ) : (
                        <button onClick={() => setNavBarOpen(false)} className={'text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'}>
                            <XMarkIcon className={'h-5 w-5'} />
                        </button>
                    )
                    }
                </div>

                <div className={'menu hidden md:block md:w-auto'} id={'navbar'}>
                    <ul className={'flex text-2xl md:text-5xl p-4 md:p-0 flex-row md:space-x-8 mt-0'}>
                        {navLinks.map((navLink, index) => {
                            return (
                                <li key={index}>
                                    <NavLinks href={navLink.href} title={navLink.title} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {navBarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    )
}

export default Navbar;