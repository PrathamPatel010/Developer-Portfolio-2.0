"use client";
import Connect from "./Connect";
import { useState } from "react";
import axios from "axios";

const EmailSection = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [acknowledgement, setAcknowledgement] = useState('');
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = { email, subject, message };
        const response = await axios.post('/api/send', formData);
        if (!response.data.success) {
            document.getElementById('ack-div').classList.add('text-red-500');
            setAcknowledgement('Some error occurred sending mail');
        }
        document.getElementById('ack-div').classList.add('text-green-500');
        setAcknowledgement('Email sent successfully!!');
        setEmail(''); setSubject(''); setMessage('');
    }

    return (
        <section id={'connect'} className={'grid md:grid-cols-2 mt-14 md:mt-12 pt-0 md:pt-24 gap-4'}>
            <Connect />
            <div className={'text-slate-100'}>
                <form className={'flex flex-col gap-4'} onSubmit={handleFormSubmit}>
                    <span>Your Email</span>
                    <input onChange={(e) => setEmail(e.target.value)}
                        value={email} className={'p-2 bg-[#181919] border border-slate-500 placeholder-slate-500 rounded-lg text-slate-100'}
                        type={'text'} placeholder={'pratham@gmail.com'} required={true} />
                    <span>Subject</span>
                    <input onChange={(e) => setSubject(e.target.value)}
                        value={subject} className={'text-slate-100 p-2 bg-[#181919] border border-slate-500 placeholder-slate-500 rounded-lg'}
                        type={'text'} placeholder={'Just saying Hi'} required={true} />
                    <span>Message</span>
                    <textarea className={'text-slate-100 h-28 p-2 bg-[#181919] border border-slate-500 placeholder-slate-500 rounded-lg'}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} placeholder={"Write your message"} required={true} />
                    <button type={'submit'}
                        className={'text-slate-100 mt-2 md:mt-5 p-2 bg-purple-600 hover:bg-purple-800 rounded-lg'}>Send Email</button>
                </form>

                <div id={'ack-div'} className={'mt-2 pt-3 text-md text-center md:text-left ack-div'}>
                    {acknowledgement}
                </div>
            </div>
        </section>
    )
}

export default EmailSection;