import React from 'react'
import { Link } from 'react-router-dom'

function Product_Card({ product }) {
  return (

    <div className=' rounded-lg px-10 py-5 group relative'>
      <div key={product.id} className="">

        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 text-center">
          <div>
          <p className="mt-1 font-extralight text-xs text-blanco opacity-50">{product.category}</p>
            <h3 className=" font-extralight text-md text-blanco">
              <Link to={`/Catalog/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Link>
            </h3>
            
          </div>
          <p className="text-blanco font-normal text-2xl ">${product.price}</p>
        </div>
      </div>
      <div className='bg-gris h-1/2 w-full absolute bottom-0 left-0 rounded-lg -z-10'></div>
    </div>

  )
}

export default Product_Card