import React, {useContext, useState, useEffect, Fragment} from 'react';
import {MasterContext} from '../contexts/MasterContext';

const MaxPrice = (props) => {

    const {fetchData} = useContext(MasterContext);
    const [products, setProduct] = useState([]);

    const productID = props.match.params.slug;

    useEffect(() => {
        fetchData(`http://localhost:5000/products/maxPrice/${productID}`)
            .then(res => {
                setProduct(res);
            })
    }, [fetchData, productID]) 


    return ( 
        <div>
            <h1>max Price {productID}</h1>
            <ul>
            {(products) && (
               
                products.map((item) => (
                    <Fragment>
                        <li key={item.id}> name: {item.name} - price: {item.price} stock: {item.stock}</li>
                        {(item.stock === 0) && (<p>Sorry, this item is out of stock</p>)}
                    </Fragment>
                ))
                
            )}
            </ul>
        </div>
     );
}
 
export default MaxPrice;