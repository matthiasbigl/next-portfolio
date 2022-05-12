import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";



export default function Chat() {
    return (

        <div className="flex h-[80vh] items-center text-center justify-center text-white" >
            <div>
                        <span>
                            {" "}
                            <h1 className={"glitch font-semibold lg:text-8xl text-6xl mb-12"}>
                                Nothing to chat about ;) feauture coming soon
                            </h1>

                        </span>
                <h2 className={"text-2xl text-zinc-200"}>
                    Return to <Link href="/">Homepage</Link>
                </h2>
                <Link href={`/`}>
                    <a className='inline-block bg-zinc-800 text-white text-lg font-semibold rounded-full px-6 py-3 mt-6 hover:translate-y-1 hover:bg-zinc-600 hover:text-blue-500 transition duration-400'>
                        Return
                    </a>
                </Link>

            </div>
        </div>



    );
}

