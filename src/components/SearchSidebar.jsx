import React from 'react';
import  SearchIcon  from '@mui/icons-material/Search';

function SearchSidebar(props) {
    return (
        <div>
            <div className='py-4 border-b border-gray-300 '>
                <input type="search" name="search_heading" id="search_heading" className=' px-4 py-1 focus-visible:outline-0 focus-visible:shadow-md focus-visible:border-0 focus-visible:shadow-blue-300 rounded-md w-full border border-gray-300' placeholder='Nhập tên truyện, tác giả...'/>
            </div>
            <div className='py-4 border-b border-gray-300 '>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">Tìm kiếm liên quan</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">Tỷ lệ chương dịch cao</label>
                </div>
            </div>
            <div className='py-4 border-b border-gray-300 '>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">Truyện vip</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">Truyện chất lượng cao</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">YY-Dịch</label>
                </div>
                <div className='flex items-center gap-4'>
                    <input type="checkbox" />
                    <label htmlFor="">YY-Convert</label>
                </div>
            </div>
            <div className='py-4 flex flex-col gap-4 border-b border-gray-300'>
                <div className='flex items-center gap-2'>
                    <span>Số chữ</span>
                    <span className='text-green-500'>0</span>
                    <span className='text-green-500'>-</span>
                    <span className='text-green-500'>10000000</span>
                </div>
                <div>
                    spiner
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className="">Thể loại</label>
                    <input type="search" placeholder='Có thể chọn nhiều...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Trạng Thái</label>
                    <select>
                        <option value="">Tất cả</option>
                        <option value="">Còn tiếp</option>
                        <option value="">Chưa hoàn thành</option>
                        <option value="">Hoàn thành</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className="">Đặc điểm</label>
                    <input type="search" placeholder='Có thể chọn nhiều...' />
                </div>
            </div>
            <div className='py-4 flex flex-col gap-4 border-b border-gray-300'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Sắp xếp theo tiêu chí</label>
                    <select>
                        <option value="">Mặc định</option>
                        <option value="">Mới cập nhật lên trước</option>
                        <option value="">Nhiều lượt đọc lên trước</option>
                        <option value="">Nhiều lượt thích lên trước</option>
                    </select>
                </div>
                <div className='btn_primary rounded-md'>
                    <SearchIcon/>
                    <span>Tìm kiếm</span>
                </div>
            </div>
        </div>
    );
}

export default SearchSidebar;