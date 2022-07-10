import React from 'react'
import FIgmaLogo from '../assets/FIgmaLogo.png'
import GitLogo from '../assets/GitLogo.png'

function About() {
    return (
        <section class="h-screen">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blanco md:text-5xl lg:text-6xl">About this project</h1>

                <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span class="font-semibold text-naranja uppercase">resources </span>
                    <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                        <a href="https://www.figma.com/file/INGvYLPb1pJKauBSdlpgos/Cantera-Digital---Ecommerce?node-id=0%3A1" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 ">
                            <img
                                className="h-32 m-10"
                                src={FIgmaLogo}
                                alt=""
                            />
                        </a>
                        <a href="https://github.com/Mauriciop23/EcommerceCanteraDigital/tree/main" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 ">
                        <img
                                className="h-32 m-10"
                                src={GitLogo}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen -z-10">
                <div className='absolute w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full bg-negro bg-opacity-80'>
                </div>
                <img
                    className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                />
            </div>
        </section>


    )
}

export default About