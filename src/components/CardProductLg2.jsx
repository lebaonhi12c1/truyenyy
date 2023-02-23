import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';
function CardProductLg2({value}) {
    const {image,title,author,progress,profile,desc} = value
    return (
        <div className='flex gap-2'>
           <div className=' w-[600px] h-[120px] rounded-lg shadow-lg shadow-slate-400 cursor-pointer overflow-hidden'>
               <Link to={`/truyen/${author}`}>
                <img src={image} alt="" className=' hover:scale-110 transition-transform w-full h-full object-cover '/>
               </Link>
           </div>
            <div>
                <div className=' text-[16px] font-medium hover:text-blue-500 cursor-pointer'><Link to={`/truyen/${author}`}>
                {title}</Link></div>
                <div className=' text-[12px] text-slate-500'>{author}</div>
                <div className='flex gap-4 items-center '>
                    <div className='flex gap-1 items-baseline'><span className=' text-green-500'>{progress}</span></div>
                    <div className='flex gap-1 items-baseline'><span className='text-[12px] font-bold cursor-pointer'>{profile}</span></div>
                </div>
                <div className='text-[12px] text-justify' style={{
                    lineHeight: '16px',
                    height: '55px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                    overflow: 'hidden'
                }}>
                    <FormatQuoteIcon fontSize='large'/><span className=' text-[10px]'>{desc}</span>
                </div>
            </div>
        </div>
    );
}

export default CardProductLg2;