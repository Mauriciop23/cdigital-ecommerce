import React from 'react'
import Product_Box from '../containers/Product_Box'

function Catalog() {
  return (
    <>
    <div className=''>
        <h1 className='text-blanco font-extralight text-6xl p-10'>Catalogue</h1>
        <hr className='text-blanco mt-2 opacity-50' />
    </div>
        
        <Product_Box/>
    </>
  )
}

export default Catalog