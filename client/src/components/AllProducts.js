import React, {useContext, useState, useEffect} from 'react';
import {MasterContext} from '../contexts/MasterContext';
import MaxPrice from './MaxPrice';
import ProductsResults from './ProductsResults';
const queryString = require('query-string');

const AllProducts = (props) => {

    const URL_STRING = queryString.parse(props.location.search);

    let defaultPage = (URL_STRING.page) ? (parseInt(URL_STRING.page)) : 1;
    let defaultlimit = (URL_STRING.limit) ? (URL_STRING.limit) : 5;

    const {fetchData, tiles, loadProducts, loading} = useContext(MasterContext);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [totalDocs, setTotalDocs] = useState(null);
    const [productsShowCount, setProductsCount] = useState(defaultPage);
    const [limit, setlimit] = useState(defaultlimit);

    const FETCH_URL = (URL_STRING.maxPrice) ? `http://localhost:5000/products?maxPrice=${URL_STRING.maxPrice}` : `http://localhost:5000/products?page=${productsShowCount}&limit=${limit}`;

    useEffect(() => {
        fetchData(FETCH_URL)
            .then(res => {
                loadProducts(res);
                setPreviousPage(res.metaData.previous);
                setNextPage(res.metaData.next);
                setTotalDocs(res.metaData.totalDocuments.criteriaBasedResults);

            })
    }, [fetchData, productsShowCount, loadProducts, FETCH_URL]);
 
   return ( 
        <main className="all-products">
           {(loading) ? (<p>loading...</p>) : (
               (URL_STRING.maxPrice) ? (

                <MaxPrice tiles={tiles} price={URL_STRING.maxPrice}/>

               ) : (
                <ProductsResults 
                    tiles={tiles} 
                    totalDocs={totalDocs}
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