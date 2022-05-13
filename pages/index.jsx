import Head from 'next/head'
import Typewriter from "typewriter-effect";
import React, {useState} from "react";
import Image from "next/image";
import profile from "../assets/images/matthiasbigl.jpg";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";


export default function Home() {
    library.add(fab);
    const [isTyping, setIsTyping] = useState(true);


    // @ts-ignore
    return (
        <div className={'flex justify-center items-center'}>
            <Head>
                <title>Matthias Bigl Webportfolio</title>
            </Head>
            <div
                className={'bg-gradient-to-br from-cyan-500 to-blue-700 w-3/4 p-8 pb-12 m-8 rounded-lg text-center flex justify-center items-center'}>


                {
                    isTyping ?
                        <div className={'h-[60vh] flex justify-center items-center'}>
                            <h1 className={'text-white font-bold text-5xl align-middle'}>
                                <Typewriter


                                    //check if the typewriter is typing
                                    options={{delay: 75, deleteSpeed: 50}}
                                    onInit={(typewriter) => {


                                        typewriter.typeString('Hello there!')
                                            .pauseFor(600)
                                            .deleteAll()
                                            .typeString('I am Matthias Bigl')
                                            .pauseFor(600)
                                            .deleteAll()
                                            .typeString('Lets get to know each other!')
                                            .pauseFor(600)
                                            .deleteAll()
                                            .start();
                                        //check if the typewriter is typing
                                        setTimeout(() => {
                                            setIsTyping(false);
                                        }, 12000);


                                    }}


                                />
                            </h1>
                        </div>
                        :
                        <div className='grid-cols-2 grid place-content-center w-full'>
                            <div
                                className={'col-span-2 flex justify-center items-center mb-5 animate-fade-in-down duration-300'}>
                                <Image
                                    src={profile}
                                    width={200}
                                    height={200}
                                    className={'rounded-full'}
                                    alt={'Matthias Bigl'}
                                />

                            </div>
                            <div
                                className={'col-span-2 flex justify-center items-center mb-2 animate-fade-in-down duration-300' }>


                                <div className="flex flex-row mt-1" role="group">

                                    <a
                                        href="https://www.instagram.com/matthias_bigl"
                                        target="_blank"
                                        className="group flex px-2 py-2 font-medium text-white hover:text-blue-900 transition ease-in-out duration-500"
                                    >

                                        <FontAwesomeIcon
                                            size="2x"
                                            icon={["fab", "instagram"]}
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        className="group flex px-2 py-2 font-medium text-white hover:text-blue-900 transition ease-in-out duration-500"
                                    >
                                        <FontAwesomeIcon
                                            size="2x"
                                            icon={["fab", "linkedin"]}
                                        />
                                    </a>
                                    <a
                                        href="https://www.github.com/matthiasbigl"
                                        target="_blank"
                                        className="group flex px-2 py-2 font-medium text-white hover:text-blue-900 transition ease-in-out duration-500"
                                    >
                                        <FontAwesomeIcon
                                            size="2x"
                                            icon={["fab", "github"]}
                                        />
                                    </a>

                                </div>
                            </div>
                            <div
                                className={'col-span-2 flex justify-center items-center pb-8 mb-5 animate-fade-in-down duration-300'}>
                                <h1 className={'text-white font-bold text-5xl align-middle'}>
                                    Matthias Bigl
                                </h1>
                            </div>
                            <div className={'col-span-2 lg:col-span-1 text-white flex justify-center mb-8 animate-fade-in-down-500'}>
                                <div className={'align-middle w-9/10 lg:w-4/5'}>
                                    <h1 className={'text-2xl font-semibold'}>
                                        About me:
                                    </h1>
                                    <p className={'text-lg'}>
                                        I am a software engineer with a passion for learning and creating.
                                        I am currently studying at <a
                                        href="https://www.htl-hl.ac.at/"
                                        target="_blank"
                                        className="font-semibold "
                                    >
                                        HTL-Hollabrunn
                                    </a>
                                        I hope to become a full stack developer in the near future.
                                        Hopefully I can impress you with my skills and projects.
                                    </p>
                                </div>


                            </div>
                            <div className={'col-span-2 lg:col-span-1 text-white flex justify-center mb-8'}>
                                <div className={'align-middle w-9/10 lg:w-4/5'}>
                                    <h1 className={'text-2xl font-semibold'}>
                                        My skills:
                                    </h1>
                                    <p className={'text-lg'}>
                                        I mostly got my education in <a className={'font-semibold text-white'}>Java</a>
                                        , <a className={'font-semibold text-white'}>PHP</a> and <a className={'font-semibold text-white'}>SQL</a>.
                                        However I am a self-taught developer in <a className={'font-semibold text-white'}>Javascript</a>, <a className={'font-semibold text-white'}>React</a> <a className={'font-semibold text-white'}>Next.js</a> and <a className={'font-semibold text-white'}>Node.js</a>.
                                        I am constantly learning new technologies and frameworks.
                                        I am also familiar with <a className={'font-semibold text-white'}>Python</a> as you will see in my projects.
                                    </p>
                                </div>


                            </div>


                        </div>
                }


            </div>


        </div>

    )

}
