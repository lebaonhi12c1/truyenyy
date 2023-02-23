import React from 'react';
import CategoryTopBook from '../../components/CategoryTopBook';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardProductCategory from '../../components/CardProductCategory';
import CardCategoryLg from '../../components/CardCategoryLg';
import { useScrollToTopPageChange } from '../../global_function';
function CategoriesPage(props) {
    const [ishover, setishover] = useState(false)
    const data =[
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả Ma đại bảo tiểu lang quân',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        },
    ]
    useScrollToTopPageChange()
    const handleSethover = function(){
        setishover(!ishover)
    }
    const getCardProduct = function(){
        var cards = []
        for (let index = 0; index < 10; index++) {
            cards.push(index)
        }
        return cards
    }
    return (
        <div className='mt-[40px]'>
            <div className=' relative -z-20'>
                <img src="https://yymedia.codeprime.net/media/genre_cover/bg01.jpeg" alt="" />
                <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[72px] text-white font-bold'>Truyện Huyền Huyễn</div>
            </div>
            <div className='root_container'>
                <div className='grid grid-cols-4 gap-4 mt-4'>
                    <div className=' col-span-3'>
                        <CategoryTopBook/>
                    </div>
                    <div className=' text-justify text-[18px] font-extralight p-4 rounded-lg border border-gray-300'>
                        Thể loại Huyền Huyễn (còn được gọi là Huyền Ảo) là những truyện có rất nhiều yếu tố kỳ ảo, phép thuật, được đặt trong bối cảnh siêu tưởng như tiên giới, ma giới... Nội dung chính chủ yếu xoay quanh về việc tu luyện pháp khí, ma pháp, tu đạo, pháp bảo, tu tiên....
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className=' col-span-3'>
                        <div className=' relative text-[24px] font-extralight border-b-[1px] border-gray-300 pb-2' onMouseEnter={handleSethover} onMouseLeave={handleSethover}>Truyện Huyền Huyễn Mới Cập Nhật
                           {ishover && (
                             <Link className=' absolute right-0 bottom-0 p-1 w-[40px] h-[40px] rounded-full flex items-center justify-center text-blue-400 hover:bg-gray-200'>
                                <EastIcon/>
                            </Link>
                           )}
                        </div>
                        <div className='grid grid-cols-2 gap-4 my-4'>
                            {getCardProduct().map(function(item,index){
                                return index<8 &&<CardProductCategory value={{isupdate: true}} key={index}/>
                            })}
                        </div>
                        <Link className='ml-auto px-2 py-1 border border-blue-400 text-blue-400 rounded-md w-[200px] text-[14px] text-center block '>
                            Danh sách đầy đủ
                        </Link>
                    </div>
                    <div>
                        <CardCategoryLg value={{data,isbrand: true, heading: 'Truyện Huyền Huyễn Đọc Nhiều Trong Tuần'}}/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className=' col-span-3'>
                        <div className=' relative text-[24px] font-extralight border-b-[1px] border-gray-300 pb-2' onMouseEnter={handleSethover} onMouseLeave={handleSethover}>Truyện Huyền Huyễn Hoàn Thành
                        </div>
                        <div className='grid grid-cols-2 gap-4 my-4'>
                            {getCardProduct().map(function(item,index){
                                return <CardProductCategory value={{isupdate: false}} key={index}/>
                            })}
                        </div>
                    </div>
                    <div>
                        <CardCategoryLg value={{data,isbrand: true, heading: 'Truyện Huyền Huyễn Hoàn Thành'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;