import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
function CategoryModal({value}) {
    const {data_dark_category,handleOpenCategory} = value
    return (
        <div>
            <div className={`bg-[#343a40] grid grid-cols-6 absolute top-0 left-0 right-0 z-30 p-5`}>
                {data_dark_category.map((item,index)=>{
                    return (
                            <div className=' flex items-center gap-1 h-10 p-6 my-3 cursor-pointer hover:bg-blue-500 hover:border ' key={index}>
                                <img src={item.image} alt="" className='w-5 h-5 rounded-full'/>
                                <div>
                                    <div className=' text-[18px] text-white'>{item.title}</div>
                                    <div className=' text-[12px] text-white'>{item.views}k</div>
                                </div>
                            </div>
                    )
                    })}
                    <div className=' absolute right-5 top-5 text-white cursor-pointer p-3 hover: border hover:border-blue-400 rounded-md z-10 bg-[#343a40] hover:bg-slate-400' onClick={handleOpenCategory}>
                        <CloseIcon/>
                    </div>
            </div>
        </div>
    );
}

export default CategoryModal;