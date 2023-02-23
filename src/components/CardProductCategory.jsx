import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function CardProductCategory({value}) {
    const {isupdate} = value
    console.log(isupdate)
    return (
        <div className='flex gap-2'>
            <Link to={`/truyen/${1}`} className='w-[80px] h-[120px] overflow-hidden rounded-lg flex-shrink-0'>
                <img src="https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg" className='w-full h-full object-cover hover:scale-110 transition-transform' alt="" />
            </Link>
            <div className='flex flex-col gap-1'>
                <Link to={`/truyen/${1}`} className=' font-bold hover:text-blue-400'>Nương Tử Nhà Ta, Không Thích Hợp (Dịch)</Link>
                <div style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    height: '32px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                    overflow: 'hidden'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum repellendus voluptas earum provident delectus aperiam, quas culpa rerum et voluptate mollitia aliquid debitis eum nisi temporibus aut alias? At.
                </div>
                <div className='flex items-center justify-between'>
                    <Link className=' flex items-center gap-2 text-[12px] hover:text-red-400'>
                        <CreateIcon fontSize='small'/>
                        <div>Nhất Thiền Tri Hạ</div>
                    </Link>
                    <div className='flex items-center gap-1 border border-gray-400 text-[12px] p-1 rounded-sm justify-center'>
                        <span>678</span>
                        <span>CHƯƠNG</span>
                    </div>
                </div>
                {isupdate &&
                (<div className='flex items-center gap-1 text-[12px]'>
                    <AccessTimeIcon fontSize='small'/>
                    <span className=' text-yellow-400'>1h</span>
                </div>)}
            </div>
        </div>
    );
}

export default CardProductCategory;