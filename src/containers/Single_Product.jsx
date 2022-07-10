import React from 'react'
import Product_Box from './Product_Box'

function Single_Product({ producto }) {
  return (
    <>
      <section class="bg-white flex justify-center  ">
        <div className='flex flex-col lg:flex-row bg-naranja max-w-screen-xl  '>
          <div className='h-full w-full  lg:basis-1/2  bg-naranja'>
            <div className="w-full min-h-full aspect-w-1 aspect-h-1 overflow-hidden lg:h-80 lg:aspect-none">
              <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
          </div>
          <div className='h-full w-full  lg:basis-1/2 bg-negro p-11 text-blanco'>
            <div className=' bg-negro'>
              <h3 className='uppercase font-extralight text-xl'>{producto.category}</h3>
              <div className='bg-blanco h-0.5 w-12 mt-2'></div>
              <div className='my-10'>
                <h1 className='text-4xl font-extralight' >{producto.title}</h1>
              </div>
              <spam className='font-medium text-naranja text-4xl'>${producto.price}</spam>
              <div className='my-10'>
                <div className='bg-blanco h-0.5 w-12'></div>
                <p className='mt-2 font-extralight text-md'>{producto.description}</p>
              </div>

              <button className='bg-naranja py-2 px-8 border-2 border-negro text-negro ease-in-out duration-300 hover:bg-negro hover:text-naranja hover:border-naranja'>ADD TO CART </button>
              <div className='py-10'>
                <p className=' text-sm text-right font-extralight opacity-50 hover:opacity-100 ease-in-out duration-300 '>NEXT PRODUCT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Product_Box />
    </>

  )
}

export default Single_Product