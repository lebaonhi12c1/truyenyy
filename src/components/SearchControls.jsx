import React from 'react';
function SearchControls(props) {
    const search_category = [
        'Huyền huyễn',
        'Kiếm hiệp',
        'Lịch sử',
        'Ngôn tình',
        'Tiên hiệp',
        'Dị giới',
        'Đô thị',
    ]
    const search_progress = [
        'Còn tiếp',
        'Hoàn thành',
        'Chưa hoàn thành'
    ]
    const search_fee = [
        'Miễn phí',
        'Thu phí'
    ]
    const search_text_number = [
        'Trên 2 triệu chữ',
        '1 triệu - 2 triệu',
        '20 vạn - 1 triệu',
        '5 vạn - 20 vạn'
    ]
    const search_translation = [
        'Dịch thuần việt',
        'Gồm cả convert'
    ]
    return (
        <div className=' bg-[#E7E7E7] py-4'>
            <div className='root_container'>
                <div className='flex items-center gap-4 py-4'>
                    <div className='text-[12px]'>Vẫn chưa tìm được truyện ưng ý?</div>
                    <select name="search_category" id="search_category" className=' p-2 rounded-md'>
                        <option value="">Thể loại</option>
                        {search_category.map((item,index)=>{
                            return <option value={index}>{item}</option>
                        })}
                    </select>
                    <select name="search_progress" id="search_progress" className=' p-2 rounded-md'>
                        {search_progress.map((item,index)=>{
                                return <option value={index}>{item}</option>
                        })}
                    </select>
                    <select name="search_fee" id="search_fee" className=' p-2 rounded-md'>
                        {search_fee.map((item,index)=>{
                                return <option value={index}>{item}</option>
                        })}
                    </select>
                    <select name="search_text_number" id="search_text_number" className=' p-2 rounded-md'>
                        <option value="">Số chữ</option>
                        {search_text_number.map((item,index)=>{
                                return <option value={index}>{item}</option>
                        })}
                    </select>
                    <select name="search_translation" id="search_translation" className=' p-2 rounded-md'>
                        <option value="">Dịch thuật</option>
                        {search_translation.map((item,index)=>{
                                return <option value={index}>{item}</option>
                        })}
                    </select>
                </div>
                <div className='p-2 bg-blue-500 text-white text-center cursor-pointer w-[100px] rounded-md whitespace-nowrap hover:opacity-70'>
                    Tìm kiếm
                </div>
            </div>
        </div>
    );
}

export default SearchControls;