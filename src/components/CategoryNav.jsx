import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';
function CategoryNav(props) {
    const [category_hover, setcategory_hover] = useState(false)
    const getCategory_demo = function(){
        var categories = []
        for (let index = 0; index < 100; index++) {
            categories.push('The loai')
        }
        return categories
    }
    const handleSetHover = function(){
        setcategory_hover(!category_hover)
    }
    return (
        <div className='bg-[#444] h-[40px] text-white fixed top-0 left-0 right-0 z-20'>
            <div className='root_container flex items-center justify-between h-full'>
                <div  className='flex items-center text-[11px] h-full'>
                    <Link to={`/`}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQfnCcjaoQp-_nFD4bjkx6NZ3BX8VqX_Ksg&usqp=CAU" alt="" className='w-[30px] h-[30px] hover:-rotate-12 transition-transform' />
                    </Link>
                    <div className='flex gap-1 items-center hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 relative cursor-pointer z-20' onMouseEnter={handleSetHover} onMouseLeave={handleSetHover}>
                        <span>Thể loại</span>
                        <ArrowDownwardIcon fontSize='12px'/>
                        {category_hover &&(
                            <div className=' absolute z-20 -bottom-[510px] left-0 w-[900px] h-[500px] bg-[#444] grid grid-cols-4 before:content-[""] before:border-[20px] before:border-[#444] before:border-t-transparent before:border-l-transparent before:border-r-transparent before:absolute before:bottom-full before:left-3 after:content-[""] after:w-full after:h-[12px] after:absolute after:bottom-full shadow-lg shadow-gray-500'>
                            {getCategory_demo().map(function(item,index){
                                return index<52 && <Link key={index} className='flex items-center px-4 py-2 hover:bg-gray-500'>{item}</Link>
                            })}
                                <Link className=' bg-blue-500 absolute top-full w-1/4 p-2 text-center shadow-lg shadow-gray-500 text-[12px] hover:opacity-70'>Xem tất cả</Link>
                            </div>
                        )}
                    </div>
                    <Link to={`/categories2/${1}`} className=' hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 flex items-center'>Kim thánh bảng</Link >
                    <Link to={`/categories2/${1}`} className=' hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 flex items-center'>Sáng tác bảng</Link >
                    <Link to={`/categories2/${1}`} className=' hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 flex items-center'>Mới cập nhật</Link >
                    <Link to={`/categories2/${1}`} className=' hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 flex items-center'>YY - Dịch</Link >
                    <Link to={`/categories2/${1}`} className=' hover:bg-black h-full px-2 hover:border-t-2 border-blue-500 hover:shadow-sm hover:shadow-blue-500 flex items-center'>YY - Convert</Link >
                </div>
                <div className='flex items-center h-full'>
                    <div className='flex items-center gap-1'>
                        <input type="search" placeholder='Tìm kiếm ... ' className=' bg-black text-white py-[2px] px-[10px] rounded-md' />
                        <div className=' rounded-md bg-gray-500 px-4 py-[2px] hover:bg-blue-500 cursor-pointer'><SearchIcon/></div>
                    </div>
                    <Link to={`/dangky`} className='flex items-center h-full hover:bg-black hover:border-t-2 hover:border-blue-500 py-[12px] px-2 text-[12px]'>Đăng ký</Link>
                    <Link to={`/dangnhap`} className='flex items-center h-full hover:bg-black hover:border-t-2 hover:border-blue-500 py-[12px] px-2 text-[12px]'>Đăng nhập</Link>
                    <Link className='h-full hover:bg-black hover:border-t-2 hover:border-blue-500 py-[12px] px-2 text-[12px] flex items-center gap-1'>
                        <LibraryBooksIcon/>
                        <span>Tủ sách</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryNav;