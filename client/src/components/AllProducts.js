import React, {useContext, useState, useEffect} from 'react';
import {MasterContext} from '../contexts/MasterContext';

const AllProducts = () => {

    const {fetchData, tiles, loadProducts} = useContext(MasterContext);
    const [productsShowCount, setProductsCount] = useState(1);

    useEffect(() => {
        fetchData(`http://localhost:5000/products?page=${productsShowCount}`)
            .then(res => {
                loadProducts(res);
            })
    }, [fetchData, productsShowCount, loadProducts]);

    return ( 
        <main className="all-products">
           <h1>All Products</h1>
           <ul>
            {(tiles) && ( 
                tiles.map((item) => (
                    <li key={item.id}>name: {item.name} - price: {item.price} stock: {item.stock}</li>
                ))
            )}

            </ul>
            {/* 
                I've added a check to see if the productsShowCount is at a certain page number.  
                this is so that the products page never returns a blank result. 
                I've hard-coded it, which isn't ideal, however, I was trying to utilise my time.
             */}

             <button onClick={() => {
                (productsShowCount === 1) ? alert('No previous Products') : setProductsCount(productsShowCount - 1)
            }}>Previous</button>

            <button onClick={() => {
                (productsShowCount === 3) ? alert('No more Products') : setProductsCount(productsShowCount + 1) 
            }}>Next</button>
        </main>
     );
}
 
export default AllProducts;