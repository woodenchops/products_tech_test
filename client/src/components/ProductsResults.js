import React, { Fragment } from 'react';

const ProductsResults = ({tiles, previousPage, setProductsCount, productsShowCount, nextPage, limit, totalDocs}) => {

    const totalPages = Math.ceil(totalDocs / limit);
 
    return ( 
        <Fragment>
        <h1>All Products</h1>
        <p>results: {tiles.length}</p>
           <ul>
            {(tiles.length > 0) && ( 
                tiles.map((item) => (
                    <li key={item.id}>name: {item.name} - price: {item.price} stock: {item.stock}</li>
                ))
            )}

            </ul>

             <button onClick={() => {
                (previousPage === undefined) ? alert('No previous Products') : setProductsCount(productsShowCount - 1)
            }}>Previous</button>

            <button onClick={() => {
                (nextPage === undefined || tiles.length < limit) ? alert('No more Products') : setProductsCount(productsShowCount + 1) 
            }}>Next</button>

            <p>{`${productsShowCount} / ${totalPages}`}</p>

            <p>check the maxPrice of a product by visiting: "http://localhost:3000/products?maxPrice=*price*"</p>
            <p>example: http://localhost:3000/products?maxPrice=0.75</p>
            <p>You can search for a single product by the product ID:</p>
            <p>example: http://localhost:3000/products/4</p>
        </Fragment>
     );
}
 
export default ProductsResults;