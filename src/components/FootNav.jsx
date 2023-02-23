import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function FootNav(props) {
    const [dropdown, setdropdown] = useState(false)
    const [isflixed, setisflixed] = useState(false)
    const offset_top = useRef()
    useEffect(() => {
      const handleScroll = ()=>{
        if(window.scrollY >= 130){
            setisflixed(true)
        }
        else{
            setisflixed(false)
        }
      }
      window.addEventListener('scroll',handleScroll)
    
      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    }, [])
    return (
        <div className={`text-white bg-[#212529] h-[40px] items-center flex ${isflixed && 'fixed top-0 left-0 right-0 z-20'}`} ref={offset_top}>
            <div className=' root_container flex justify-between items-center text-[12px] h-full'>
                <div className=' flex items-center h-full'>
                    <div className=' px-3 cursor-pointer bg-black text-white border-t-2 border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300 shadow-sm shadow-blue-300'><HomeIcon/></div>
                    <Link to={`/categories2/${2}`} className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300'>Kim thánh bảng</Link>
                    <Link to={`/categories2/${2}`} className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300'>Sáng tác bảng</Link>
                    <Link to={`/categories2/${2}`} className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300'>Truyện full</Link>
                    <Link to={`/categories2/${2}`} className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300'>Mới cập nhập</Link>
                    <Link to={`/categories2/${2}`} className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300'>Truyện dịch</Link>
                    <div className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300 relative' onMouseEnter={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}}>
                        <ReorderIcon/>
                        <ExpandMoreIcon/>
                        {dropdown && (<div className='bg-[#212529] rounded-md absolute top-[45px] left-0 w-52 after:content-[""] after:border-[10px] after:absolute after:bottom-full after:left-[14.5px] after:border-[#212529] after:border-t-transparent after:border-r-transparent after:border-l-transparent shadow-md shadow-blue-300 z-10'>
                            <Link to={`/categories2/${2}`} className='p-2 text-left hover:bg-slate-500 px-8 block'>Truyện chất lượng cao</Link>
                            <Link to={`/categories2/${2}`} className='p-2 text-left hover:bg-slate-500 px-8 block'>Truyện mới đăng</Link>
                            <Link to={`/categories2/${2}`} className='p-2 text-left hover:bg-slate-500 px-8 block'>Truyện đề xuất</Link>
                            <Link to={`/categories2/${2}`} className='p-2 text-left hover:bg-slate-500 px-8 block border-t-2 border-t-slate-500'>Danh sách thể loại</Link>
                        </div>)}
                    </div>
                </div>
                <div className='flex items-center h-full'>
                    <div className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300 gap-1'>
                        <HelpOutlineIcon/>
                        <span>Hướng dẫn</span>
                    </div>
                    <div className=' px-3 text-gray-400 cursor-pointer hover:bg-black hover:text-white hover:border-t-2 hover:border-t-blue-400 h-full flex items-center hover:shadow-md hover:shadow-blue-300 gap-1'>
                        <CloudUploadIcon/>
                        <span>Đăng truyện</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default FootNav;