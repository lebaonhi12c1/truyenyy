import StarIcon from '@mui/icons-material/Star';
import React from 'react';

function ProductNominations(props) {
    return (
        <div>
            <div className=' text-[28px] font-bold text-center'>
                Các bài review truyện Mãn Cấp Đại Lão Huyền Học, Cô Ấy Lại Xuyên Trở Về Rồi (Dịch)
            </div>
            <div className='my-4'>
                <div className=' flex gap-4 my-4'>
                    <div>
                        <img src="https://i.pinimg.com/originals/b8/da/f1/b8daf10bf15f1efd4366a2ec74f238d7.png" alt="" className='w-[80px] h-[80px] rounded-full  object-cover' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between flex-1'>
                            <div className='flex items-center gap-4 font-bold'>
                                <div className='flex items-center'>
                                    <span>5</span>
                                    <div className=' text-yellow-500 -translate-y-[2px]'>
                                        <StarIcon/>
                                    </div>
                                </div>
                                <div>
                                    YY Cao
                                </div>
                            </div>
                            <div>
                                Review bởi <span className=' text-blue-500'>Baoboiviquyt</span> cách đây 2mth
                            </div>
                        </div>
                        <div>
                            Truyện hay cuốn. Nhưng mà có 1 số từ ngữ vẫn ko phù hợp lắm vd thái thái có thể thành phu nhân cho hợp ngữ cảnh hiện đại. Nu9 lạnh lùng như người tu tiêm, ông n9 thì như đường tăng mờ nhạt 😂
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 text-center w-[120px] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white select-none '>
                                Đọc review
                            </div>
                            <div className='p-2 text-center w-[120px] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white select-none '>
                                Đọc truyện
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-4 my-4'>
                    <div>
                        <img src="https://i.pinimg.com/originals/b8/da/f1/b8daf10bf15f1efd4366a2ec74f238d7.png" alt="" className='w-[80px] h-[80px] rounded-full  object-cover' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between flex-1'>
                            <div className='flex items-center gap-4 font-bold'>
                                <div className='flex items-center'>
                                    <span>5</span>
                                    <div className=' text-yellow-500 -translate-y-[2px]'>
                                        <StarIcon/>
                                    </div>
                                </div>
                                <div>
                                    YY Cao
                                </div>
                            </div>
                            <div>
                                Review bởi <span className=' text-blue-500'>Baoboiviquyt</span> cách đây 2mth
                            </div>
                        </div>
                        <div>
                            Truyện hay cuốn. Nhưng mà có 1 số từ ngữ vẫn ko phù hợp lắm vd thái thái có thể thành phu nhân cho hợp ngữ cảnh hiện đại. Nu9 lạnh lùng như người tu tiêm, ông n9 thì như đường tăng mờ nhạt 😂
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 text-center w-[120px] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white select-none '>
                                Đọc review
                            </div>
                            <div className='p-2 text-center w-[120px] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white select-none '>
                                Đọc truyện
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductNominations;