import React from 'react';
import CardCategoryLg from './CardCategoryLg';
function CategoryListLg() {

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
    return (
        <div className=' grid grid-cols-3 gap-4'>
            <CardCategoryLg value={{data,isbrand: true,heading: 'Kim thánh bảng'}}/>
            <CardCategoryLg value={{data,isbrand: true,heading: 'Kim thánh bảng'}}/>
            <CardCategoryLg value={{data,isbrand: true,heading: 'Kim thánh bảng'}}/>
        </div>
    );
}

export default CategoryListLg;