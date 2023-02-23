import React from 'react';
import HeadNav from './HeadNav';
import CenterNav from './CenterNav';
import FootNav from './FootNav';
function HomeNavbar(props) {
    return (
        <div>
            <HeadNav/>
            <CenterNav/>
            <FootNav/>
        </div>
    );
}

export default HomeNavbar;
