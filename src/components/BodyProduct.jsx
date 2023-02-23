import React, { useState } from 'react';
import ProductIntro from './ProductIntro';
import ProductChapList from './ProductChapList';
import ProductCharacter from './ProductCharacter';
import ProductNominations from './ProductNominations';
function BodyProduct(props) {
    const [index, setindex] = useState(0)
    const handleSetindex = function(index){
        setindex(index)
    }
    const getComponent = function(){
        switch (index) {
            case 0:
                return <ProductIntro/>
                break;
            case 1:
                return <ProductChapList/>
                break;
            case 2:
                return <ProductNominations/>
                break;
            case 3:
                return <ProductCharacter/>
                break;
            default:
                break;
        }
    }
    return (
        <div className='my-4'>
            <div className=' flex items-center'>
                <div className={`p-2 rounded-sm select-none hover:border hover:border-slate-300 ${index === 0 ? 'border border-b-gray-300 border-b-transparent':'border-b-[1px] border-slate-300'}`} onClick={function(){handleSetindex(0)}}>Giới thiệu</div>
                <div className={`p-2 rounded-sm select-none hover:border hover:border-slate-300 ${index === 1 ? 'border border-b-gray-300 border-b-transparent':'border-b-[1px] border-slate-300'}`} onClick={function(){handleSetindex(1)}}>Danh sách chương</div>
                <div className={`p-2 rounded-sm select-none hover:border hover:border-slate-300 ${index === 2 ? 'border border-b-gray-300 border-b-transparent':'border-b-[1px] border-slate-300'} flex items-center gap-1`} onClick={function(){handleSetindex(2)}}><span className=''>Đề cử</span><span className='px-1 rounded-md text-center bg-yellow-500'>5</span></div>
                <div className={`flex gap-1 p-2 rounded-sm select-none hover:border hover:border-slate-300 ${index === 3 ? 'border border-b-gray-300 border-b-transparent':'border-b-[1px] border-slate-300'}`} onClick={function(){handleSetindex(3)}}>
                    <span>
                        Nhân vật
                    </span>
                    <span className=' bg-blue-500 px-1 text-center rounded-md text-white'>2</span>
                </div>
                <div className='border-b-[1px] border-slate-300 flex-1 p-2 text-white select-none'>hide</div>
            </div>
            <div className=' mt-4'>
                {getComponent()}
            </div>
        </div>
    );
}

export default BodyProduct;