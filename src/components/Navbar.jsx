import React from 'react'
import { Link } from 'react-router-dom'
import LogoEcommerce from '../assets/LogoEcommerce.svg';

function Navbar() {
    return (
        <nav className="relative bg-negro">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex w-full justify-start md:w-4/12 lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={LogoEcommerce}
                                alt=""
                            />
                        </Link>
                    </div>
                    <form className=' w-full md:w-6/12'>
                        <div className="flex bg">
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-naranja bg-negro border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 hidden md:flex" type="button">All categories <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                            </div>
                            <div class="relative w-full">
                                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Product..." required />
                                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-negro bg-naranja rounded-r-lg border border-naranja hover:bg-naranja focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            </div>

                        </div>
                    </form>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link href="#" className="whitespace-nowrap text-base font-medium text-naranja">
                            Sign in
                        </Link>
                        <Link
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-naranja bg-indigo-600 hover:bg-indigo-700"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='text-gris' />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
                        <Link to="/Catalog" className="font-medium text-naranja font-extralight hover:text-blanco hover:font-normal ease-in-out duration-300">
                            All Products
                        </Link>
                        <Link to="/About" className="font-medium text-naranja font-extralight hover:text-blanco hover:font-normal ease-in-out duration-300">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar