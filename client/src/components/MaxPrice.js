import React, {Fragment} from 'react';

const MaxPrice = ({tiles, price}) => {

    return ( 
        <div>
            <h1>max Price: {`£ ${price}`}</h1>
            <p>results: {tiles.length}</p>
            <ul>
            {(tiles) && (
               
                tiles.map((item) => (
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