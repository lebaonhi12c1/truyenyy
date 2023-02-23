import React from 'react';

function HintProductList({value}) {
    function toLowerCaseNonAccentVietnamese(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }

    const data = [
        {
            image: 'https://yymedia.codeprime.net/media/novels/2019-11/0a78b981c8.jpg',
            title: 'Con Đường bá chủ',
            author: 'Akay Hau'
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/2019-11/0a78b981c8.jpg',
            title: 'Con Đường bá chủ',
            author: 'Akay Hau'
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/2019-11/0a78b981c8.jpg',
            title: 'hokage',
            author: 'Akay Hau'
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/2019-11/0a78b981c8.jpg',
            title: 'Con Đường bá chủ',
            author: 'Akay Hau'
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/2019-11/0a78b981c8.jpg',
            title: 'Con Đường bá chủ',
            author: 'Akay Hau'
        },
    ]
    return (
        <div className=' absolute top-full left-0 right-0 bg-white shadow shadow-gray-400 py-5 max-h-[300px] overflow-y-auto z-10'>
            {data.map((item,index)=>{
        return (
            toLowerCaseNonAccentVietnamese(item.title).includes(toLowerCaseNonAccentVietnamese(value))&&(<div className=' flex items-center gap-5 px-5 py-1 hover:bg-blue-100 hover:text-blue-500 cursor-pointer' key={index}>
                <img src={item.image} alt="" className='w-[40px] h-[60px]' />
                <div>
                    <div className=' font-bold text-lg'>
                        {item.title}
                    </div>
                    <div className='text-gray-400 text-sm'>{item.author}</div>
                </div>
            </div>)
        )
    })}
        </div>
    );
}

export default HintProductList;