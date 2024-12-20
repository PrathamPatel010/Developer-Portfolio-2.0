"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { about } from "../data";

const HeroSection = () => {
  return (
    <section id={"hero"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 sm:gap-x-10 lg:grid-cols-12">
        <div className="col-span-1 md:order-2 lg:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/hero-img.webp"}
              width={300}
              height={300}
              alt={"hero-img-webp"}
            />
          </div>
        </div>
        <div className="col-span-1 md:order-1 lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Pratham Patel", 1000, "Full-Stack Engineer", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "50px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl text-justify">
            {about}
          </p>
          <div>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:prathampatel0221@gmail.com?subject=Hire%20Me&body=I%20am%20interested%20in%20working%20with%20you!")
              }
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-black bg-white hover:bg-slate-400"
            >
              Hire Me
            </button>
            <a
              href={"/PrathamPatel_Resume.pdf"}
              download={"PrathamPatel_Resume"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full text-white border border-white bg-transparent hover:bg-slate-500 mt-3">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
