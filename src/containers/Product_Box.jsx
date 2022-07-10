import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import Product_Card from '../components/Product_Card'

function Product_Box() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className='md:grid-cols-3'>
          <Skeleton height={350} />
        </div>
        <div className='md:grid-cols-3'>
          <Skeleton height={350} />
        </div>
        <div className='md:grid-cols-3'>
          <Skeleton height={350} />
        </div>
        <div className='md:grid-cols-3'>
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProducts = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className='flex items-end'>
          <h2 className="text-5xl font-extralight tracking-tight text-blanco">New Products</h2>
          <div className="buttons ml-10">
            <button className="text-lg text-blanco opacity-50 font-extralight mx-2 hover:text-naranja hover:opacity-100 ease-in-out duration-300"
              onClick={() => setFilter(data)}>All</button>
            <button className="text-lg text-blanco opacity-50 font-extralight mx-2 hover:text-naranja hover:opacity-100 ease-in-out duration-300"
              onClick={() => filterProducts("men's clothing")}>Men</button>
            <button className="text-lg text-blanco opacity-50 font-extralight mx-2 hover:text-naranja hover:opacity-100 ease-in-out duration-300"
              onClick={() => filterProducts("women's clothing")}>Women</button>
            <button className="text-lg text-blanco opacity-50 font-extralight mx-2 hover:text-naranja hover:opacity-100 ease-in-out duration-300"
              onClick={() => filterProducts("electronics")}>Electronics</button>
          </div>
        </div>

        <hr className='text-blanco mt-2' />


        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {filter.map((product) => {
            return (
              <>
                <Product_Card product={product} />
              </>
            )
          })}
        </div>

      </>
    );
  };


  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  )
}

export default Product_Box