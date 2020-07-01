import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const AreYouSure = (e) => {
        const confirmMessage = 'Are you sure you wish to proceed to the un-styled welcome page? It’s rather ugly?';
        (!window.confirm(confirmMessage)) && e.preventDefault();
    }

    return ( 
        <main>
            <h1>contents</h1>
            <nav>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link onClick={(e) => AreYouSure(e)} to="/welcome">welcome page</Link></li>
                    <li><Link to="/welcome-styled">Styled welcome page</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ol>
            </nav>
        </main>
     );
}
 
export default Nav;