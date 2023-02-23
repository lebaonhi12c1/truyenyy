import React from 'react';
import Footer from './../Footer';
import NavLayout3 from '../NavLayout3';
function Categories2Layout({children}) {
    return (
        <div>
            <NavLayout3/>
            {children}
            <Footer/>
        </div>
    );
}

export default Categories2Layout;