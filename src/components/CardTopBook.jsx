import React from 'react';
import { Link } from 'react-router-dom';
import '../subStyle/card_top_book.css'
function CardTopBook(props) {
    return (
        <div className='w-[135px] h-[275px] flex flex-col gap-2 items-center'>
            <Link to={`/truyen/${1}`} className='block w-[90px] h-[150px] relative shadow-lg shadow-gray-400 z-0 border-2 border-gray-400 '>
                <img src="https://yymedia.codeprime.net/media/novels/2019-07/c061f49e8e.jpg" alt="" className='w-full h-full object-cover card_category_hover'/>
                <div className=' w-[10px] h-[100%] bg-gray-300 absolute top-0 left-full bottom-0 border border-gray-400' style={{
                transform: 'perspective(100px) rotateY(45deg)'
                }}></div>
            </Link>
            <div className=' font-bold hover:text-blue-500 w-full' >
                <Link to={`/truyen/${1}`} className=' break-words' style={{
                    // display: 'block',
                    fontSize: '16px',
                    lineHeight: '18px',
                    height: '36px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                    overflow: 'hidden'
                }}>
                    Đế bá (dịch edit)
                </Link>
            </div>
            <div className=''style={{
                fontSize: '12px',
                lineHeight: '16px',
                height: '32px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '2',
                overflow: 'hidden'
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos fugiat ratione natus, adipisci, nihil rem at, accusantium ea voluptatibus non odio eveniet facilis nisi velit. Dolorum accusamus corporis aspernatur!
            </div>
        </div>
    );
}

export default CardTopBook;