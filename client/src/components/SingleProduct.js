import React, {useContext, useState, useEffect, Fragment} from 'react';
import {MasterContext} from '../contexts/MasterContext';

const SingleProduct = (props) => {

    const {fetchData} = useContext(MasterContext);
    const [singleProduct, setSingleProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const productID = props.match.params.slug;

    useEffect(() => {
        fetchData(`http://localhost:5000/products/${productID}`)
            .then(res => {
                setSingleProduct(res);
                setLoading(false);
            })
    }, [fetchData, productID]) 


    return (
        (loading) ? (<p>loading...</p>) : (

        <div>
            <h1>single product {productID}</h1>
            <ul>
            {(singleProduct.length > 0) ? (
               
                singleProduct.map((item) => (
                    <Fragment>
                        <li key={item.id}>name: {item.name} - price: {item.price} stock: {item.stock} {(item.stock === 0) && (<span> - Sorry, this item is out of stock</span>)}</li> 
                    </Fragment>
                ))
                
            ): <p>No item with that ID {productID} exists</p>}
            </ul>
        </div>

        )
     );
}
 
export default SingleProduct;