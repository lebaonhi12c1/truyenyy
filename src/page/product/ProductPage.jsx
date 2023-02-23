import React from 'react';
import HeadProduct from '../../components/HeadProduct';
import BodyProduct from '../../components/BodyProduct';
import { useScrollToTopPageChange } from '../../global_function';
function ProductPage(props) {
    useScrollToTopPageChange()
    return (
        <div className='root_container'>
            <HeadProduct/>
            <BodyProduct/>
        </div>
    );
}

export default ProductPage;