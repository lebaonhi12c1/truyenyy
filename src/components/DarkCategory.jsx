import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

function DarkCategory({value}) {
    const {data_dark_category,handleOpenCategory} = value
    return (
        <div className='grid grid-cols-2 gap-2 justify-between h-[300px] bg-[#212529] rounded-md overflow-hidden relative'>
            {data_dark_category.map((item,index)=>{
                return (
                    index<12 && (
                        <Link to={`/categories/${index}`} className=' flex items-center gap-1 h-10 p-4 cursor-pointer hover:bg-blue-500 hover:border' key={index}>
                            <img src={item.image} alt="" className='w-5 h-5 rounded-full'/>
                            <div>
                                <div className=' text-[12px] text-white'>{item.title}</div>
                                <div className=' text-[10px] text-white'>{item.views}k</div>
                            </div>
                        </Link>
                    )
                )
            })}
            <div className=' absolute -bottom-2 -right-5 rotate-[135deg] text-center w-[55px] h-7 bg-gray-500 text-2xl cursor-pointer hover:text-white hover:bg-gray-300' onClick={handleOpenCategory}>
                <MoreHorizIcon/>
            </div>
        </div>
    );
}

export default DarkCategory;