import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
function CardCategory({value}) {
    const {product_list_data,heading,card_type} = value
    const [hover, sethover] = useState(false)
    const getElement = function(){
        switch (card_type) {
            case 1:
                return (
                    <div className={`bg-[#f4f4f4] rounded-lg flex flex-col p-4 overflow-hidden relative`} onMouseEnter={function(){sethover(true)}} onMouseLeave={function(){sethover(false)}}>
                        <div className='font-bold text-[14px]'>
                            {heading}
                        </div>
                        <div className='my-4'>
                            {
                                product_list_data.map(function(item,index){
                                    return index<10 && (
                                        <Link to={`/truyen/${index}`} className='mt-4 block' key={index}>
                                            <div className=' flex justify-between gap-1'>
                                                <div className='text-[14px] text-gray-600 leading-3 h-3 overflow-hidden text-ellipsis whitespace-nowrap hover:text-blue-500 cursor-pointer'>{item.title}</div>
                                                <div className='text-[8px] text-gray-600 whitespace-nowrap text-right'>{item.category}</div>
                                            </div>
                                            <div className='text-[11px] text-gray-600 mt-1'>
                                                {item.author}
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className=' flex items-center gap-1 text-[12px] cursor-pointer text-blue-500 hover:opacity-70'>
                            <div>Xem thêm</div> <EastIcon fontSize='12px'/>
                        </div>
                        {hover && (<div className=' absolute top-3 right-3 text-blue-500 cursor-pointer'>
                            <EastIcon/>
                        </div>)}
                    </div>
                )
                break;
            case 2:
                return (
                    <div className={`bg-[#f4f4f4] rounded-lg flex flex-col p-4 overflow-hidden relative`} onMouseEnter={function(){sethover(true)}} onMouseLeave={function(){sethover(false)}}>
                        <div className='font-bold text-[14px]'>
                            {heading}
                        </div>
                        <div className='my-4'>
                            {
                                product_list_data.map(function(item,index){
                                    return index<10 && (
                                        <Link to={`/truyen/${index}`} className='mt-4 block' key={index}>
                                            <div className=' flex justify-between gap-1'>
                                                <div className='text-[14px] text-gray-600 leading-3 h-3 overflow-hidden text-ellipsis whitespace-nowrap hover:text-blue-500 cursor-pointer'>{item.title}</div>
                                            </div>
                                            <div className='text-[11px] text-gray-600 mt-1 flex items-center gap-1 cursor-pointer'>
                                                <div className='flex items-center    gap-1'>
                                                    <PermIdentityIcon fontSize='16px'/>
                                                    <div className='text-[10px]'>{item.profile}</div>
                                                </div>
                                                <div className=' bg-blue-500 px-1 rounded-lg text-white text-[8px]'>{item.progress}</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className=' flex items-center gap-1 text-[12px] cursor-pointer text-blue-500 hover:opacity-70'>
                            <div>Xem thêm</div> <EastIcon fontSize='12px'/>
                        </div>
                        {hover && (<div className=' absolute top-3 right-3 text-blue-500 cursor-pointer'>
                            <EastIcon/>
                        </div>)}
                    </div>
                )
                break
            default:
                break;
        }
    }
    return (
        <div className="">
            {getElement()}
        </div>
    );
}

export default CardCategory;