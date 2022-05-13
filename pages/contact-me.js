import Head from 'next/head'
import React, {useState} from "react";
import Image from "next/image";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";
import * as emailjs from "emailjs-com";


export default function ContactMe() {
    library.add(fab);
    const [isTyping, setIsTyping] = useState(true);

    function sendEmail(e){
        console.log("Sending email...");
        console.log(process.env.SERVICE_ID_EMAILJS);
        console.log(process.env.USER_ID_EMAILJS);
        emailjs.sendForm(process.env.SERVICE_ID_EMAILJS, 'template_nafvl5l', e.target, process.env.USER_ID_EMAILJS)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }



    // @ts-ignore
    return (<div className={'flex justify-center items-center'}>
            <Head>
                <title>Contact Me
                </title>
            </Head>


            <div
                className={'bg-gradient-to-br from-pink-500 to-yellow-500 w-3/4 p-4 md:p-8 pb-12 m-8 rounded-lg text-center flex justify-center items-center drop-shadow-lg'}>
                <div className={'h-[60vh] text-white w-full flex flex-row '}>
                  <div className={'grid grid-cols-2 w-full'}>
                    <div className={'col-span-1 w-full hidden md:flex items-center justify-center text-center flex-col p-8'}>

                        <h1 className={"text-5xl font-bold w-full mb-8 drop-shadow-2xl"}>
                            Do you have a project in mind?
                        </h1>
                        <p className={"text-2xl w-full"}>
                            I am always open to discussing <br/>new projects and opportunities.
                        </p>

                    </div>
                    <div className={'w-full col-span-2 md:col-span-1 flex justify-center'}>
                        <div className="flex lg:justify-center  w-full self-center">

                            <div className="w-full  px-1 ">
                                <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                                    <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                       sendEmail(e);
                                    }}
                                    >
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                className="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                        "
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className="
                                            w-full
                                            rounded
                                            py-3
                                            px-[14px]
                                            text-body-color text-base
                                            border border-[f0f0f0]
                                            outline-none
                                            focus-visible:shadow-none
                                            focus:border-primary
                                            "
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                className="
                                            w-full
                                            rounded
                                            py-3
                                            px-[14px]
                                            text-body-color text-base
                                            border border-[f0f0f0]
                                            outline-none
                                            focus-visible:shadow-none
                                            focus:border-primary
                                            "
                                            />
                                        </div>

                                        <div className="mb-6">
                     <textarea
                         rows="6"
                         placeholder="Message"
                         name="message"
                         className="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    resize-none
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                     >

                     </textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="
                                            w-full
                                            text-white
                                            bg-blue-500
                                            rounded
                                            border border-primary
                                            p-3
                                            transition
                                            hover:bg-opacity-90
                                            "
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                  </div>




                </div>


            </div>


        </div>

    )

}
