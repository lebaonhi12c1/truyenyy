import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function NavLayout3(props) {
    const [active,setActive] = useState(0)
    const handdleSetActive = function (value){
        setActive(value)
    }
    return (
        <div className=' bg-blue-500'>
            <div className='root_container'>
               <div className='grid grid-cols-6 h-[40px] text-white '>
                    <Link to={'/'} className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 0 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(0)}}><HomeIcon/></Link>
                    <Link className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 1 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(1)}}><ThumbUpIcon/></Link>
                    <Link className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 2 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(2)}}><SearchIcon/></Link>
                    <Link to={'/dangky'} className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 3 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(3)}}><GroupAddIcon/></Link>
                    <Link to={'/dangnhap'} className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 4 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(4)}}><LogoutIcon/></Link>
                    <Link className={`flex items-center justify-center hover:bg-blue-700 duration-200 active:scale-95 ${active === 5 && 'bg-blue-700'}`} onClick={function(){handdleSetActive(5)}}><MoreHorizIcon/></Link>
               </div>
            </div>
        </div>
    );
}

export default NavLayout3;