import React, {useContext, useState, useEffect} from 'react';
import {MasterContext} from '../contexts/MasterContext';
import MaxPrice from './MaxPrice';
import ProductsResults from './ProductsResults';
const queryString = require('query-string');

const AllProducts = (props) => {

    const {fetchData, tiles, loadProducts, loading} = useContext(MasterContext);
    const [productsShowCount, setProductsCount] = useState(1);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const limit = 5;
    const maxPrice = 'maxPrice';

    const URL_STRING = queryString.parse(props.location.search);
    const URL_PARAM = Object.keys(URL_STRING)[0];
    const URL_VAL = Object.values(URL_STRING)[0];

    const FETCH_URL = (URL_PARAM === maxPrice) ? `http://localhost:5000/products?maxPrice=${URL_VAL}` : `http://localhost:5000/products?page=${productsShowCount}&limit=${limit}`;

    useEffect(() => {
        fetchData(FETCH_URL)
            .then(res => {
                loadProducts(res);
                setPreviousPage(res.metaData.previous);
                setNextPage(res.metaData.next);
            })
    }, [fetchData, productsShowCount, loadProducts, FETCH_URL]);
 
   return ( 
        <main className="all-products">
           {(loading) ? (<p>loading...</p>) : (
               (URL_PARAM === maxPrice) ? (

                <MaxPrice tiles={tiles} price={URL_VAL}/>

               ) : (
                <ProductsResults 
                    tiles={tiles} 
                    previousPage={previousPage} 
                    setProductsCount={setProductsCount} 
                    productsShowCount={productsShowCount} 
                    nextPage={nextPage} 
                    limit={limit}/>
               )
           )}
           

        </main>
     );
}
 
export default AllProducts;