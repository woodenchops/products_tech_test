import React, {Fragment} from 'react';

const MaxPrice = ({tiles, price}) => {

    return ( 
        <div>
            <h1>max Price: {`£ ${price}`}</h1>
            <p>results: {tiles.length}</p>
            <ul>
            {(tiles.length > 0) ? (
               
                tiles.map((item) => (
                    <Fragment>
                        <li key={item.id}> name: {item.name} - price: {item.price} stock: {item.stock} {(item.stock === 0) && (<span> - Sorry, this item is out of stock</span>)}</li>
                    </Fragment>
                ))
                
            ) : (<p>No product matches that price limit</p>)}
            </ul>
        </div>
     );
}
 
export default MaxPrice;