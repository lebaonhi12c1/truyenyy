import React from 'react';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
function HeadNav(props) {
    return (
        <div className='justify-between text-[11px] text-gray-500 h-[40px] border-b-2'>
            <div className='root_container flex items-center justify-between h-full'>
                <div className='flex items-center gap-4'>
                    <div className=' font-bold text-black cursor-pointer'>Thới Giới Truyện Tiên Hiệp</div>
                    <a href="https://dauladailuc.com/"className=' cursor-pointer hover:text-gray-900'>Tiên Hiệp Ký</a>
                    <a href="https://m.truyenngontinh.vip/"className=' cursor-pointer hover:text-gray-900'>Truyện Ngôn Tình</a>
                    <a href="https://yeuthanky.com/"className=' cursor-pointer hover:text-gray-900'>Đọc truyện Online</a>
                </div>
                <div className='flex items-center gap-4'>
                    <div className=' cursor-pointer hover:text-gray-900 flex gap-1 items-center'>
                        <PhoneIphoneOutlinedIcon/>
                        <span>Tải App Đọc Truyện</span>
                    </div>
                    <div className=' cursor-pointer hover:text-gray-900 flex gap-1 items-center'>
                        <InputOutlinedIcon/>
                        <span>Đăng Nhập</span>
                    </div>
                    <div className=' cursor-pointer hover:text-gray-900 flex gap-1 items-center'>
                        <PersonOutlineOutlinedIcon/>
                        <span>Đăng Ký Thành Viên</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeadNav;