import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';

const categories=[
    {
        name:"About Me",
        slug:"about-me",
    },
    {
        name:"Projects",
        slug:"projects",
    },
    {
        name:"Contact Me",
        slug:"contact-me",
    },
    {
        name:"Resume",
        slug:"resume",
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
                    className='hidden md:float-left md:contents '>

                    <div className=' float-right align-baseline'>
                        <div>

                            {categories.map((category) => (
                                <Link href={`/category/${category.slug}`} key={category.slug}
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


            </div>

        </div>
    );

}
export default Header;
