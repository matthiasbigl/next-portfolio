import Head from 'next/head'
import Typewriter from "typewriter-effect";
import {useState} from "react";


export default function Home() {
    const [isTyping, setIsTyping] = useState(true);
    // @ts-ignore
    return (
        <div className={'flex justify-center items-center'}>
            <Head>
                <title>Matthias Bigl Webportfolio</title>
            </Head>
            <div
                className={'bg-gradient-to-br from-cyan-500 to-blue-700 h-[60vh] w-3/4 p-8 pb-12 m-8 rounded-lg text-center flex justify-center items-center'}>

                <div>
                    <h1 className={'text-white font-bold text-5xl align-middle'}>


                        {
                            isTyping ?
                                <Typewriter


                                    //check if the typewriter is typing
                                    options={{delay: 75,deleteSpeed:50}}
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


                                /> :
                                <div className='grid'>


                                </div>
                        }


                    </h1>

                </div>

            </div>
        </div>

    )

}
