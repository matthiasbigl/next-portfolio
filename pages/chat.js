import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";


export default function Chat() {

    return (

        <div className="flex h-[80vh] items-center text-center justify-center text-white">
            <div>
                        <span>
                            {" "}
                            <h1 className={"glitch font-semibold lg:text-8xl text-6xl mb-12"}>
                                Nothing to chat about ;) <br/>feauture coming soon
                            </h1>

                        </span>
                <h2 className={"text-2xl text-zinc-200"}>
                    Return to <Link href="/">Homepage</Link>
                </h2>
            </div>
        </div>


    );
}

