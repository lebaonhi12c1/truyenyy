import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import CardAuthor from './CardAuthor';
function ProductChapList(props) {
    const [active, setactive] = useState(0)
    return (
        <div className="grid grid-cols-4 gap-2">
            <div className=' col-span-3'>
                <div className=' flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div><input type="checkbox" name="" id="" /></div>
                        <div>Chương mới lên trước</div>
                    </div>
                    <div className='flex items-center text-blue-500'>
                        <div className=' w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 active:opacity-40 select-none'><KeyboardArrowLeftIcon/></div>
                        <div className={`w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 ${active ===0 && 'text-white bg-blue-500'} active:opacity-40 select-none`}>1</div>
                        <div className={`w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 ${active ===1 && 'text-white bg-blue-500'} active:opacity-40 select-none`}>2</div>
                        <div className=' w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 active:opacity-40 select-none'><KeyboardArrowRightIcon/></div>
                    </div>
                </div>
                <div className=' bg-[#444] py-4 text-white rounded-md my-4'>
                    <div className='grid grid-cols-12 p-2 items-center gap-[80px] justify-between border-b-[1px] border-gray-400'>
                        <div>#</div>
                        <div className=' col-span-3'>Chương số</div>
                        <div className=' col-span-6'>Tựa chương</div>
                        <div><AccessTimeIcon/></div>
                    </div>
                    <div className='grid grid-cols-12 p-2 items-center gap-[80px] justify-between border-b-[1px] border-gray-400'>
                        <div>1</div>
                        <div className=' col-span-3 flex items-center gap-1 text-blue-500'><span className=' hover:text-blue-400'>Chương</span><span>1</span></div>
                        <div className=' col-span-6 text-blue-500 hover:text-blue-400'>Có Nữ Quỷ Muốn Đoạt Xá</div>
                        <div>4mth</div>
                    </div>
                    <div className='grid grid-cols-12 p-2 items-center gap-[80px] justify-between border-b-[1px] border-gray-400'>
                        <div>2</div>
                        <div className=' col-span-3 flex items-center gap-1 text-blue-500'><span>Chương</span><span>2</span></div>
                        <div className=' col-span-6 text-blue-500'>Có Nữ Quỷ Muốn Đoạt Xá</div>
                        <div>4mth</div>
                    </div>
                    <div className='grid grid-cols-12 p-2 items-center gap-[80px] justify-between border-b-[1px] border-gray-400'>
                        <div>3</div>
                        <div className=' col-span-3 flex items-center gap-1 text-blue-500'>
                            <img src="https://cdn3.vectorstock.com/i/1000x1000/47/02/gold-vip-card-on-red-jewelry-background-vector-21234702.jpg" alt="" className=' w-[30px] h-[20px] border border-yellow-400'/>
                            <span>Chương</span>
                            <span>3</span>    
                        </div>
                        <div className=' col-span-6 text-blue-500'>Có Nữ Quỷ Muốn Đoạt Xá</div>
                        <div>4mth</div>
                    </div>
                </div>
                <div className=' flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div><input type="checkbox" name="" id="" /></div>
                        <div>Chương mới lên trước</div>
                    </div>
                    <div className='flex items-center text-blue-500'>
                        <div className=' w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 active:opacity-40 select-none'><KeyboardArrowLeftIcon/></div>
                        <div className={`w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 ${active ===0 && 'text-white bg-blue-500'} active:opacity-40 select-none`}>1</div>
                        <div className={`w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 ${active ===1 && 'text-white bg-blue-500'} active:opacity-40 select-none`}>2</div>
                        <div className=' w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center border border-gray-300 active:opacity-40 select-none'><KeyboardArrowRightIcon/></div>
                    </div>
                </div>
            </div>
            <div>
                <CardAuthor/>
            </div>
        </div>
    );
}

export default ProductChapList;