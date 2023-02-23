import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';
function CardProductLg({value}) {
    const {image, title, author, chap, view, desc} = value
    return (
        <div className='flex gap-2'>
           <div className=' w-[600px] h-[120px] rounded-lg shadow-lg shadow-slate-400 cursor-pointer overflow-hidden'>
                <Link to={`/truyen/${chap}`}>
                    <img src={image} alt="" className=' hover:scale-110 transition-transform w-full h-full object-cover '/>
                </Link>
           </div>
            <div>
                <div className=' text-[16px] font-medium hover:text-blue-500 cursor-pointer'><Link to={`/truyen/${chap}`}>
                {title}</Link></div>
                <div className=' text-[12px] text-slate-500'>{author}</div>
                <div className='flex gap-4 items-center '>
                    <div className='flex gap-1 items-baseline'><span className=' text-red-500'>{chap}</span><span className=' text-[9px] text-red-500'>chương</span></div>
                    <div className='flex gap-1 items-baseline'><span className=' text-blue-500'>{view}</span><span className=' text-[9px] text-blue-500'>đọc</span></div>
                </div>
                <div className='text-[12px] text-justify'>
                    <FormatQuoteIcon fontSize='large'/><span className=' text-[10px]'>{desc}</span>
                </div>
            </div>
        </div>
    );
}

export default CardProductLg;