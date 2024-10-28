import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return (
        <>
           <section id="socials" className="text-slate-100 py-10 md:py-15 bg-gradient-to-b from-[#141517] via-[#101112] to-[#0b0b0c] border-t border-gray-700">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-6 text-slate-100">
                        Let&apos;s Connect on Socials
                    </h1>
                </div>
                
                <div className="mt-5 flex justify-center gap-6 text-4xl">
                    {/* GitHub Link */}
                    <Link
                        href="https://github.com/PrathamPatel010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-slate-300 hover:text-gray-800"
                    >
                        <BsGithub/>
                    </Link>
                    
                    {/* LinkedIn Link */}
                    <Link
                        href="https://www.linkedin.com/in/pratham-patel-08865821b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-slate-300 hover:text-gray-800"
                    >
                        <BsLinkedin/>
                    </Link>
                    
                    {/* TwitterX Link */}
                    <Link
                        href="https://twitter.com/Prathamtwts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-slate-300 hover:text-gray-800"
                    >
                        <BsTwitterX/>
                    </Link>
                </div>
                
                <div className="pt-6 text-slate-500 text-center text-sm">
                    <small>© 2024 Pratham Patel. All rights reserved.</small>
                </div>
            </section>
        </>
    );
};

export default Footer;
