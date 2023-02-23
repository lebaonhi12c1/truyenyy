import React from 'react';

function Support(props) {
    return (
        <div className=' text-center h-[300px] bg-[#f4f4f4] rounded-lg flex flex-col items-center justify-center'>
            <div className=' text-[24px] font-bold'>
                Bạn muốn đăng <br/> truyện lên TruyenYY?
            </div>
            <div className=' text-[12px] text-gray-600'>
                Chúng tôi sẵn sàng hỗ trợ bạn bất cứ lúc nào. Hãy nhấn vào lựa chọn bên dưới.
            </div>
            <div className='btn_primary w-[80%] my-2 rounded-lg hover:opacity-75 cursor-pointer'>
                Hướng dẫn đăng truyện
            </div>
            <div className='btn_primary w-[80%] my-2 rounded-lg hover:opacity-75 cursor-pointer'>
                Trung tâm xuất bản
            </div>
            <div className=' text-[12px] text-gray-600 italic'>
                (Cần đăng nhập để xem thông tin)
            </div>
        </div>
    );
}

export default Support;