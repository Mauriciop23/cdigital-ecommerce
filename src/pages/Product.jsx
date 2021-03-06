import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Single_Product from '../containers/Single_Product';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
      }
      getProduct();
    }, [])

    const Loading = () =>{
        return(
            <>
                Loading...
            </>
        )
    }
    
  return (
    <div>
        {loading ? <Loading/> : <Single_Product producto={product} />}
    </div>
  )
}

export default Product