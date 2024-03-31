import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {

    return (
        <>
            <section id="socials" className="text-slate-100 pb-5 pt-10 md:pt-20">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-center">Let&apos;s Connect on Socials</h1>
                </div>
                <div className="mt-5 socials flex flex-row justify-center gap-4 text-4xl">
                        <Link className={'p-1 hover:bg-purple-800 text-white rounded-md'} href="https://github.com/PrathamPatel010" target={'_blank'} rel={'noopener noreferrer'}>
                            <BsGithub/>
                        </Link>
                        <Link className={'p-1 hover:bg-purple-800 text-white rounded-md'} href="https://www.linkedin.com/in/pratham-patel-08865821b" target={'_blank'} rel={'noopener noreferrer'}>
                            <BsLinkedin/>
                        </Link>
                        <Link className={'p-1 hover:bg-purple-800 text-white rounded-md'} href="https://twitter.com/Prathamtwts" target={'_blank'} rel={'noopener noreferrer'}>
                            <BsTwitterX/>
                        </Link>
                </div>
                <div className="pt-5 text-slate-500 text-right">
                    <small>©Copyright 2024-Pratham Patel. All rights reserved.</small>
                </div>
            </section>
        </>
    )
}

export default Footer;