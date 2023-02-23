import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollTop(props) {
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className=' fixed bottom-6 right-6 rounded-full bg-blue-500 text-white w-11 h-11 flex items-center justify-center cursor-pointer hover:opacity-75' onClick={handleScrollTop}>
            <ArrowUpwardIcon/>
        </div>
    );
}

export default ScrollTop;