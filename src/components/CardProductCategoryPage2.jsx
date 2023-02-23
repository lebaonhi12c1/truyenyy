import React from 'react';
import { Link } from 'react-router-dom';
import  CreateIcon  from '@mui/icons-material/Create';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WbAutoIcon from '@mui/icons-material/WbAuto';
import TouchAppIcon from '@mui/icons-material/TouchApp';
function CardCategoryPage2({value}) {
    const {index,item} = value
    const {image,title,desc,author,category,view,chap} = item
    return (
        <div className='flex gap-2 justify-between border-t-[1px] border-gray-400 py-4'>
            <Link to={`/truyen/${1}`} className='w-[80px] h-[120px] overflow-hidden rounded-lg flex-shrink-0 relative'>
                <img src={image} className='w-full h-full object-cover hover:scale-110 transition-transform' alt="" />
                <div className=' absolute bottom-0 left-0 right-0 p-1 text-center bg-red-500 text-white text-[10px] opacity-90'>Top {index +1}</div>
            </Link>
            <div className=' flex flex-col gap-1'>
                <Link to={`/truyen/${1}`} className=' font-bold hover:text-blue-400'>{title}</Link>
                    <div style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        height: '32px',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '2',
                        overflow: 'hidden'
                    }}>
                        {desc}
                    </div>
                    <Link className=' flex items-center gap-2 text-[12px] hover:text-red-400'>
                        <CreateIcon fontSize='small'/>
                        <div>{author}</div>
                    </Link>
                <div className='flex items-center gap-2'>
                    <div className=' px-1 text-[10px] text-red-500 border border-red-500 rounded-full text-center'>Còn tiếp</div>
                    <div className=' px-1 text-[10px] text-red-500 border border-red-500 rounded-full text-center'>Còn tiếp</div>
                    <div className=' px-1 text-[10px] text-red-500 border border-red-500 rounded-full text-center'>Còn tiếp</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className=' px-1 text-[10px] text-gray-500 border border-gray-500 rounded-full text-center'>{category}</div>
                    <div className=' px-1 text-[10px] text-gray-500 border border-gray-500 rounded-full text-center'>{category}</div>
                    <div className=' px-1 text-[10px] text-gray-500 border border-gray-500 rounded-full text-center'>{category}</div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-1 w-[250px] flex-shrink-0 h-[20px]'>
                <div className='py-1 h-[30px] px-2  flex items-center gap-1 justify-center border border-gray-300 rounded-md'><span>{chap}</span><BookmarkIcon/></div>
                <div className='py-1 h-[30px] px-2  flex items-center gap-1 justify-center border border-gray-300 rounded-md'><span>{view}</span><WbAutoIcon/></div>
                <div className='py-1 h-[30px] px-2  flex items-center gap-1 justify-center border border-red-500 text-red-500 rounded-md'><span>{chap}</span><TouchAppIcon/></div>
                <div className='py-1 h-[30px] px-2  flex items-center gap-1 justify-center border border-gray-300 rounded-md'><span>{view}</span><TouchAppIcon/></div>
            </div>
        </div>
    );
}

export default CardCategoryPage2;