import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
function ProductCharacter(props) {
    return (
        <div>
            <div className=' text-[24px] font-bold text-center'>
                Nhân vật trong truyện Mãn Cấp Đại Lão Huyền Học, Cô Ấy Lại Xuyên Trở Về Rồi (Dịch)
            </div>
            <div>
                <div className='flex gap-4 my-4'>
                <div>
                    <img src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/2:2/w_746,h_746,c_limit/Barasch-Avatar.jpg" alt="" className='w-[100px] h-[100px] object-cover rounded-full' />
                </div>
                <div className=' flex flex-col gap-2'>
                    <div className=' text-[20px] font-bold text-blue-500 '>Nguyên Thư Trầm</div>
                        <div className='flex items-center gap-4 text-green-500'>
                            <CheckIcon/>
                            <span>Nhân vật chính</span>
                        </div>
                        <div>
                            Giới tính: <span>Nam</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 my-4'>
                <div>
                    <img src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/2:2/w_746,h_746,c_limit/Barasch-Avatar.jpg" alt="" className='w-[100px] h-[100px] object-cover rounded-full' />
                </div>
                <div className=' flex flex-col gap-2'>
                    <div className=' text-[20px] font-bold text-blue-500 '>Nguyên Thư Trầm</div>
                        <div className='flex items-center gap-4 text-green-500'>
                            <CheckIcon/>
                            <span>Nhân vật chính</span>
                        </div>
                        <div>
                            Giới tính: <span>Nam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCharacter;