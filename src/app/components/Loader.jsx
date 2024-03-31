import './loader.css';
import {useState,useEffect} from "react";
import backendFunFacts from "@/app/utils/backendFacts";

const Loader = () => {
    const [lastIndices, setLastIndices] = useState([]);
    const [randomFact, setRandomFact] = useState('');
    useEffect(() => {
        const getRandomFact = () => {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * backendFunFacts.length);
            } while (lastIndices.includes(randomNumber));

            // maintain a list of last 5 indices to avoid immediate repetition
            const updatedIndices = [...lastIndices, randomNumber].slice(-5);
            setLastIndices(updatedIndices);
            setRandomFact(backendFunFacts[randomNumber]);
            return;
        }
        // get the fact only if it is not fetched yet
        if (lastIndices.length === 0 || randomFact === '') {
            getRandomFact();
        }
    }, [lastIndices, randomFact]);

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
            <div className="text-center font-semibold text-lg pt-5 md:pt-16">
                <h4>{randomFact}</h4>
            </div>
        </>
    );
};

export default Loader;
