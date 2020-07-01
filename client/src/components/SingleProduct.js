import React, {useContext, useState, useEffect, Fragment} from 'react';
import {MasterContext} from '../contexts/MasterContext';

const SingleProduct = (props) => {

    const {fetchData} = useContext(MasterContext);
    const [singleProduct, setSingleProduct] = useState([]);

    const productID = props.match.params.slug;

    useEffect(() => {
        fetchData(`http://localhost:5000/products/${productID}`)
            .then(res => {
                setSingleProduct(res);
            })
    }, [fetchData, productID]) 


    return ( 
        <div>
            <h1>hello from single product {productID}</h1>
            <ul>
            {(singleProduct.length > 0) ? (
               
                singleProduct.map((item) => (
                    <Fragment>
                        <li key={item.id}>name: {item.name} - price: {item.price} stock: {item.stock}</li>
                        {(item.stock === 0) && (<p>Sorry, this item is out of stock</p>)}
                    </Fragment>
                ))
                
            ): <p>No item with that ID {productID} exists</p>}
            </ul>
        </div>
     );
}
 
export default SingleProduct;