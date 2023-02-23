import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
function CardAuthor(props) {
    return (
        <div className=' text-center p-4 bg-gray-200 flex flex-col items-center gap-4 rounded-lg'>
            <div>
                <img src="https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/2:2/w_746,h_746,c_limit/Barasch-Avatar.jpg" alt="" className='w-[120px] rounded-full' />
            </div>
            <div className=' font-bold text-[18px]'>Author Name</div>
            <div className=' flex items-center justify-between gap-5'>
                <div className=' flex flex-col items-center gap-1'>
                    <AutoStoriesIcon/>
                    <div className=' flex items-baseline gap-1 text-[10px]'>
                        <span>1</span>
                        <span>truyện</span>
                    </div>
                </div>
                <div className=' flex flex-col items-center gap-1 flex-1'>
                    <LibraryBooksIcon/>
                    <div className=' flex items-baseline gap-1 text-[10px]'>
                        <span>32423</span>
                        <span>chữ</span>
                    </div>
                </div>
                <div className=' flex flex-col items-center gap-1'>
                    <FavoriteIcon/>
                    <div className=' flex items-baseline gap-1 text-[10px]'>
                        <span>34</span>
                        <span>yêu thích</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardAuthor;