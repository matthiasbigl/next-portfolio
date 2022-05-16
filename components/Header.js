import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const categories = [
    {
        name: "Projects",
        slug: "projects",
    },
    {
        name: "Resume",
        slug: "resume",
    },
    {
        name: "Contact Me",
        slug: "contact-me",
    }

]



const Header = () => {


    return (
        <div className='container mx-auto px-10 mb-8 text-zinc-200'>
            <div className='border-b w-full inline-block border-blue-500 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                     <span className='cursor-pointer font-bold text-4xl'>
                      Matthias Bigl
                     </span>
                    </Link>
                </div>
                <div
                    className='hidden md:contents '>

                    <div className='float-right align-baseline'>
                        <div>

                            {categories.map((category) => (
                                <Link href={`/${category.slug}`} key={category.slug}
                                >
                                    <span
                                        className={'ml-4 md:float-right mt-2 align-middle text-zinc-200 font font-semibold cursor-pointer'}>
                                         {category.name}
                                     </span>
                                </Link>

                            ))}

                        </div>
                    </div>

                </div>
                <div
                    className='contents md:hidden '>

                    <div className='float-right align-baseline'>
                        <div>


                                    <span
                                        className={'ml-4 md:float-right mt-2 align-middle text-zinc-200 font font-semibold cursor-pointer'}>
                                        test
                                     </span>


                        </div>
                    </div>

                </div>



            </div>

        </div>
    );

}
export default Header;
