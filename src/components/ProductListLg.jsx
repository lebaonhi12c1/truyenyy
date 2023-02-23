import React from 'react';
import CardProductLg from './CardProductLg';
import CardProductLg2 from './CardProductLg2';

function ProductListLg({value}) {
    const {product_list_data,card_type,heading} = value
    const getElement = function(){
        switch (card_type) {
            case 1:
                return (
                    <div className='border border-gray-200 rounded-lg p-3'>
                        <div className='text-[14px] font-bold'>{heading}</div>
                        <div className=' grid grid-cols-2 mt-4 gap-4' id='product_list_lg'>
                            {product_list_data.map((item,index)=>{
                                return index<6 && <CardProductLg value={item} key={index}/>
                            })}
                        </div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div className='border border-gray-200 rounded-lg p-3'>
                        <div className='text-[14px] font-bold'>{heading}</div>
                        <div className=' grid grid-cols-2 mt-4 gap-4' id='product_list_lg'>
                            {product_list_data.map((item,index)=>{
                                return index<8 && <CardProductLg2 value={item} key={index}/>
                            })}
                        </div>
                    </div>
                )
                break
            default:
                break;
        }
    }
    return (
        <div className="">
            {getElement()}
        </div>
    );
}

export default ProductListLg;