import React from 'react';
import '../subStyle/product_info.css'
import EastIcon from '@mui/icons-material/East';
import CardAuthor from './CardAuthor';
function ProductIntro(props) {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className=' col-span-3'>
                <div className='w-full h-[240px] overflow-y-auto px-4 hover:bg-gray-100 product_info_scroll'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, enim minima fugit quasi repudiandae asperiores sequi fugiat non eligendi ipsa distinctio amet porro blanditiis iste nulla quia deleniti dignissimos numquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste ratione fugiat natus possimus nostrum nulla itaque facilis sit similique obcaecati unde, quasi quia dolorum rem pariatur maiores debitis doloremque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos impedit a distinctio eligendi esse cupiditate, dolor, molestias in, et reprehenderit eum laborum incidunt quo optio. Neque laudantium qui ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, enim minima fugit quasi repudiandae asperiores sequi fugiat non eligendi ipsa distinctio amet porro blanditiis iste nulla quia deleniti dignissimos numquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste ratione fugiat natus possimus nostrum nulla itaque facilis sit similique obcaecati unde, quasi quia dolorum rem pariatur maiores debitis doloremque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos impedit a distinctio eligendi esse cupiditate, dolor, molestias in, et reprehenderit eum laborum incidunt quo optio. Neque laudantium qui ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, enim minima fugit quasi repudiandae asperiores sequi fugiat non eligendi ipsa distinctio amet porro blanditiis iste nulla quia deleniti dignissimos numquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste ratione fugiat natus possimus nostrum nulla itaque facilis sit similique obcaecati unde, quasi quia dolorum rem pariatur maiores debitis doloremque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos impedit a distinctio eligendi esse cupiditate, dolor, molestias in, et reprehenderit eum laborum incidunt quo optio. Neque laudantium qui ullam.
                </div>
                <div className=' flex gap-4 my-2 items-center'>
                    <div className='w-[150px] font-bold text-[12px] text-gray-500'>
                        Tags
                    </div>
                    <div className=' flex items-center border-b-[1px] border-gray-300 flex-1 p-2 gap-4'>
                        <div># <span className=' text-red-500'>Ngon tinh</span></div>
                        <div># <span className=' text-red-500'>Ngon tinh</span></div>
                        <div># <span className=' text-red-500'>Ngon tinh</span></div>
                    </div>
                </div>
                <div className=' flex gap-4 my-2 '>
                    <div className='w-[150px] font-bold text-[12px] text-gray-500 py-2'>
                        M???i c???p nh???t
                    </div>
                    <div className='border-b-[1px] border-gray-300 flex-1 '>
                        <div className=' flex items-center justify-between p-2'>
                            <div className='flex gap-4'>
                                <span className=' font-bold text-blue-500'>Chuong 240:</span>
                                <span className=' text-blue-500'>Nhan kiep truoc qua kiep nay</span>
                            </div>
                            <div className=' text-gray-400'>2mth</div>
                        </div>
                        <div className=' flex items-center justify-between p-2'>
                            <div className='flex gap-4'>
                                <span className=' font-bold text-blue-500'>Chuong 240:</span>
                                <span className=' text-blue-500'>Nhan kiep truoc qua kiep nay</span>
                            </div>
                            <div className=' text-gray-400'>2mth</div>
                        </div>
                        <div className=' flex items-center justify-between p-2'>
                            <div className='flex gap-4'>
                                <span className=' font-bold text-blue-500'>Chuong 240:</span>
                                <span className=' text-blue-500'>Nhan kiep truoc qua kiep nay</span>
                            </div>
                            <div className=' text-gray-400'>2mth</div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#444444] p-4 text-white rounded-lg'>
                    <div className=' flex items-baseline gap-4 '>
                        <div className=' text-[24px] font-bold'>Ki??m phi???u m???i ????? c???</div>
                        <div className=' flex gap-2 text-[13px]'><span>Th??ng n??y:</span><span className=' text-yellow-500'>2</span></div>
                        <div className=' flex gap-2 text-[13px]'><span>Tu???n n??y:</span><span className=' text-yellow-500'>3</span></div>
                    </div>
                    <div>
                        <div className=' flex items-center gap-4 border-b-[1px] border-gray-300 py-2 text-[12px]'>
                            <img src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" alt="" className=' w-[40px] h-[40px] object-cover hover:scale-110 rounded-full border-[3px] border-fuchsia-500 transition-transform'/>
                            <div className=' bg-black px-4 text-center rounded-sm'>5</div>
                            <div>username</div>
                            <div>2d</div>
                        </div>
                        <div className=' flex items-center gap-4 border-b-[1px] border-gray-300 py-2 text-[12px]'>
                            <img src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" alt="" className=' w-[40px] h-[40px] object-cover hover:scale-110 rounded-full border-[3px] border-fuchsia-500 transition-transform'/>
                            <div className=' bg-black px-4 text-center rounded-sm'>5</div>
                            <div>username</div>
                            <div>2d</div>
                        </div>
                        <div className=' flex items-center gap-4 border-b-[1px] border-gray-300 py-2 text-[12px]'>
                            <img src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" alt="" className=' w-[40px] h-[40px] object-cover hover:scale-110 rounded-full border-[3px] border-fuchsia-500 transition-transform'/>
                            <div className=' bg-black px-4 text-center rounded-sm'>5</div>
                            <div>username</div>
                            <div>2d</div>
                        </div>
                        <div className=' flex items-center gap-4 border-b-[1px] border-gray-300 py-2 text-[12px]'>
                            <img src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" alt="" className=' w-[40px] h-[40px] object-cover hover:scale-110 rounded-full border-[3px] border-fuchsia-500 transition-transform'/>
                            <div className=' bg-black px-4 text-center rounded-sm'>5</div>
                            <div>username</div>
                            <div>2d</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-[12px] select-none mt-[20px]'><span>Xem th??m</span><EastIcon fontSize='12px'/></div>
                </div>
            </div>
            <div>
                <div className='border border-blue-500 rounded-lg text-blue-500 p-4 text-center mb-4'>
                    <div className=' font-bold text[14px] mb-4'>
                        Th??ng B??o T??? Ng?????i Ph??? Tr??ch
                    </div>
                    <div className=' text-justify text-[12px]'>
                        ?????y kim phi???u (Kh??ng ?????y v??o ph???n ????? c???) nh???n CODE gi???m gi?? theo t??? l??? (?????y xong nh???n tin cho m??nh ????? nh???n code nh??):
                        40KP=25%
                        50KP=35%
                        Truy???n ????ng duy nh???t t???i YY, c??c trang kh??c ?????u l?? reup. M???i ng?????i nh??? r?? viu cho truy???n nha (??? _ ???)(?????? 3???)???
                    </div>
                </div>
                <CardAuthor/>
            </div>
        </div>
    );
}

export default ProductIntro;