"use client";
import Connect from "./Connect";
import {useState} from "react";
import axios from "axios";

const EmailSection = () => {
    const [email,setEmail] = useState(  '');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [acknowledgement,setAcknowledgement] = useState('');
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const formData = {email,subject,message};
        const response = await axios.post('/api/send',formData);
        if (!response.data.success){
            document.getElementById('ack-div').classList.add('text-red-500');
            setAcknowledgement('Some error occurred sending mail');
        }
        document.getElementById('ack-div').classList.add('text-green-500');
        setAcknowledgement('Email sent successfully!!');
        setEmail('');setSubject('');setMessage('');
    }

    return(
        <section id={'connect'} className={'grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'}>
            <Connect/>
            <div>
                <form className={'flex flex-col gap-4'} onSubmit={handleFormSubmit}>
                    <span>Your Email</span>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className={'p-2 bg-[#181919] border border-slate-500 rounded-lg'} type={'text'} placeholder={'pratham&gmail.com'}/>
                    <span>Subject</span>
                    <input onChange={(e)=>setSubject(e.target.value)} value={subject} className={'p-2 bg-[#181919] border border-slate-500 rounded-lg'} type={'text'} placeholder={'Just saying Hi'}/>
                    <span>Message</span>
                    <textarea className={'h-28 p-2 bg-[#181919] border border-slate-500 rounded-lg'} onChange={(e)=>setMessage(e.target.value)} value={message} placeholder={"Let's talk about it"}/>
                    <button type={'submit'} className={'mt-5 p-2 bg-purple-600 hover:bg-purple-800 rounded-lg'}>Send Email</button>
                </form>
                <div id={'ack-div'} className={'mt-2 pt-3 text-md text-center md:text-left ack-div'}>
                    {acknowledgement}
                </div>
            </div>
        </section>
    )
}

export default EmailSection;