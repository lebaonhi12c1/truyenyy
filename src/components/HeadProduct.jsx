import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { useState } from 'react';
function HeadProduct(props) {
    const [qrcode, setqrcode] = useState(false)
    const handleQrcode = function(){
        setqrcode(!qrcode)
    }
    return (
        <div className='border border-gray-200 rounded-lg p-3 mt-4 flex gap-2 justify-between'>
            <div className='w-[160px] h-[240px] overflow-hidden rounded-lg shadow-sm shadow-slate-500'>
                <img src="https://yymedia.codeprime.net/media/novels/202208/man-cap-dai-lao-huyen-hoc-co-ay-lai-xuyen-tro-ve-r-f2c0bc26a3.jpg" className='w-full h-full hover:scale-110 transition-transform' alt="" />
            </div>
            <div className='flex-1 text-left flex flex-col justify-between gap-2'>
                <div className=' font-bold text-[32px] '>Man cap dai lao huyen hoc</div>
                <div className=' font-medium text[14px]'>Cuc moc du</div>
                <div className=' flex items-center gap-4'>
                    <div className=' px-2 py-1 rounded-full text-blue-500 text-center text-[12px] border border-blue-500'>Ngon tinh</div>
                    <div className=' px-2 py-1 rounded-full text-green-500 text-center text-[12px] border border-green-500'>Ngon tinh</div>
                    <div className=' px-2 py-1 rounded-full text-red-500 text-center text-[12px] border border-red-500'>Ngon tinh</div>
                    <div className=' px-2 py-1 rounded-full text-green-500 text-center text-[12px] border border-green-500'>Ngon tinh</div>
                </div>
                <div className=' flex items-center gap-4'>
                    <div className='flex gap-1 items-baseline'><span className='text-[24px] '>12</span><span>Chương</span></div>
                    <div className='flex gap-1 items-baseline'><span className='text-[24px] '>134.4k</span><span>Lượt xem</span></div>
                    <div className='flex gap-1 items-baseline'><span className='text-[24px] '>25</span><span>Lượt thích</span></div>
                </div>
                <div className='p-2 bg-blue-500 text-white text-6 w-[100px] text-center rounded-md  cursor-pointer hover:opacity-80 active:opacity-20 select-none'>Đọc từ đầu</div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div className=''>
                    <div className='border border-gray-200 rounded-lg overflow-hidden'>
                        <div className=' flex items-baseline justify-center text-violet-500'><span className='text-[32px] '>100</span><span>/100</span></div>
                        <div className='p-2 bg-slate-200 text-center'>3 để cử</div>
                    </div>
                    <div className=' text-yellow-400'>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>
                <div className='flex items-center text-green-500 hover:opacity-80 cursor-pointer relative select-none active:text-black' onClick={handleQrcode}>
                    <CropFreeIcon/>
                    <span>QR Code</span>
                    {qrcode && (
                        <div className=' absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-[200px] border border-slate-500'>
                            <img src="https://www.qrcode-gen.com/images/qrcode-default.png" alt=""  className='object-cover' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeadProduct;