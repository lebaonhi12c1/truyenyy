import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupIcon from '@mui/icons-material/Group';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloudIcon from '@mui/icons-material/Cloud';
function Footer(props) {
    return (
        <div>
            <div className=' border-b-2 border-gray-300 my-4'>
                <div className=' flex items-center gap-3 justify-center text-gray-500'>
                    <AppleIcon/>
                    <AdbIcon/>
                </div>
                <div className=' flex items-center justify-center gap-5 my-4 text-[11px]'>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Giới thiệu </div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Liên hệ</div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Điểu khoản dịch vụ</div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Quy đinh riêng tư</div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Vấn đề bản quyền</div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Sitemap</div>
                    <div className=' hover:text-blue-400 text-gray-500 cursor-pointer'>Tải logo TruyenYY</div>
                </div>
            </div>
            <div className='root_container flex gap-4 text-gray-500'>
                <div className='w-[40%]'>
                    <div>
                        <img src="data:image/png;base64,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" alt="" width='153px' height='40px' />
                    </div>
                    <div className=' text-[13px] mt-4'>
                        Chào mừng bạn đến với TruyenYY - Thế Giới Truyện Tiên Hiệp Huyền Ảo. TruyenYY (TruyệnYY hay gọi tắt "YY") là một nền tảng nội dung số trên internet, nơi thành viên có thể tự do xuất bản những nội dung tiếng Việt như: Tiểu thuyết, light novel, truyện ngắn hoặc thơ văn khác. Với những chức năng được cải tiến liên tục, TruyenYY sẽ mang lại cho Tác giả sáng tác truyện, Dịch giả đăng truyện và Người đọc truyện online những trải nghiệm tuyệt vời nhất. Đừng ngại đăng ký tài khoản tại TruyenYY, chỉ mất 30s và hoàn toàn miễn phí.
                    </div>
                </div>
                <div className='grid grid-cols-3 flex-1'>
                    <div className=' text-[13px]'>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                    </div>
                    <div className=' text-[13px]'>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                    </div>
                    <div className=' text-[13px]'>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                        <div className=' hover:text-blue-500 cursor-pointer'>Truyện Huyền Nguyễn</div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div className='root_container flex justify-between items-center'>
                    <div>
                        <div className='flex items-center text-gray-400 text-[10px]'>
                            <CopyrightIcon/>
                            <div className='font-bold'>2012-2023 CodePrime. All Rights Reserved.</div>
                        </div>
                        <div className=' font-bold text-xl text-gray-400'>CodePrime</div>
                    </div>
                    <div className=' flex items-center gap-4 cursor-pointer'>
                        <div>
                         <FacebookIcon/>
                        </div>
                        <div>
                        <GroupIcon/>
                        </div>
                        <div>
                        <TwitterIcon/>
                        </div>
                        <div>
                        <YouTubeIcon/>
                        </div>
                        <div>
                        <CloudIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;