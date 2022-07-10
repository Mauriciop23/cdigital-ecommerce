import React from 'react'
import LogoEcommerce from '../assets/LogoEcommerce2.svg';

function Footer() {
    return (
        <footer className='bg-naranja h-64 '> 
            <div className='flex flex-row items-center'>
                <div className='h-full w-full basis-1/2'>
                    <img
                        className="h-32 m-10"
                        src={LogoEcommerce}
                        alt=""
                    />
                </div>
                <div className='h-32 w-full basis-1/2 m-10  flex items-center justify-end'>
                    <a target="_blank" href='https://mauricio-perez.herokuapp.com/' className='bg-naranja rounded-md  py-2 px-8 border-2 border-negro text-negro ease-in-out duration-300 hover:bg-negro hover:text-naranja hover:border-naranja'>About Me </a>

                </div>
            </div>

            <p className='text-center'>@ 2022 Mauricio Pérez Cárdenas. Todos los derechos reservados..</p>
            
        </footer>
    )
}

export default Footer