import './loader.css';
import {useState,useEffect} from "react";
import backendFunFacts from "@/app/utils/backendFacts";

const Loader = () => {
    const [randomFact, setRandomFact] = useState('');
    useEffect(() => {
        const getRandomFact = () => {
            const randomNumber = Math.floor(Math.random() * backendFunFacts.length);
            setRandomFact(backendFunFacts[randomNumber]);
            return;
        }
        getRandomFact();
    }, []);

    return (
        <>
            <div className="reactor">
                <div className="triangle"></div>
                <div className="circle-1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="circle-2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="circle-3"></div>
                <div className="circle-4">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="circle-5">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="circle-6"></div>
                <div className="circle-7"></div>
                <div className="circle-8">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="text-center font-semibold text-xs md:text-lg pt-5 md:pt-16">
                <h4>{randomFact}</h4>
            </div>
        </>
    );
};

export default Loader;
