import GitHubIcon from '../../../public/images/github-icon.svg';
import LinkedInIcon from '../../../public/images/linkedin-icon.svg';
import Image from "next/image";
import Link from 'next/link';

const Connect = () => {
    return(
        <div>
            <h5 className={'text-xl font-bold text-white my-2'}>Let&apos; Connect</h5>
            <p className={'text-[#ADB7BE] mb-4 max-w-md'}>
                {" "}
                I&apos;m actively looking for new opportunities. My inbox is always open,
                Whether you have a question or just want to say hi, I&apos;ll try my best to get
                back to you!
            </p>
            <div className={'socials flex flex-row gap-2'}>
                <Link href={'https://github.com/PrathamPatel010'}>
                    <Image src={GitHubIcon} alt={'github-icon'} width={100} height={100}/>
                </Link>
                <Link href={''}>
                    <Image src={LinkedInIcon} alt={'linkedIn-icon'} width={100} height={100}/>
                </Link>
            </div>
        </div>
    )
}

export default Connect;