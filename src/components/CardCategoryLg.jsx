import React from 'react';
import { Link } from 'react-router-dom';

function CardCategoryLg({value}) {
    const {data,isbrand,heading} = value
    return (
        <div className=' border border-gray-200 rounded-lg'>
            <div className=' font-bold text-[14px] m-4'>{heading}</div>
            <div>
                {isbrand && (<div className=' flex gap-2 p-4'>
                    <div className=' bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>1</div>
                    <div>
                        <div className=' font-bold text-[14px] hover:text-blue-400 cursor-pointer'><Link to={`/truyen/${data[0].author}`}>{data[0].title}</Link></div>
                        <div className='text-[10px] text-slate-500'><span >{data[0].chap}</span>chương</div>
                        <div className='text-[10px] text-slate-500'>{data[0].author}</div>
                        <div className='p-1 w-[50px] rounded-md border border-gray-500 text-center text-[10px] hover:text-blue-500 hover:border-blue-500 cursor-pointer select-none'>{data[0].category}</div>
                    </div>
                    <div className=' relative w-[60px] h-[100px]  '>
                        <img src={data[0].image} alt="" className='border-slate-500 z-10 absolute w-full h-full' style={{clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0 92%)'}}/>
                        <div className='w-2 h-[100px] bg-slate-300 absolute left-full top-0 border-2 border-slate-500 z-10' style={{clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0 100%)'}}>
                            
                        </div>
                        <div className=' absolute h-4 bottom-0 bg-slate-600 z-0 opacity-50' style={{clipPath:' polygon(100% 0, 0 0, 80% 100%)', width: 'calc(100% + 15px)'}}>
                        </div>
                    </div>
                </div>)}
                
                <div>
                    {isbrand ? (
                        data.map((item,index)=>{
                            return index < 10 && index !==0 && (
                                <div className=' border-t-[1px] border-gray-200 flex items-center p-4 justify-between gap-1'>
                                    <div className={`${index<3 ? 'bg-blue-500 text-white':'bg-gray-300'} text-[12px] rounded-full w-5 h-5 flex items-center justify-center p-1`}>{index +1}</div>
                                    <div className=' text-[12px] font-medium text-gray-400 leading-4 overflow-hidden whitespace-nowrap text-ellipsis hover:text-blue-400 cursor-pointer max-w-[180px]'><Link to={`/truyen/${index}`}>{item.title}</Link></div>
                                    <div className='text-[12px] font-medium text-gray-400'>{item.chap}</div>
                                </div>
                            )
                        })
                    ):( data.map((item,index)=>{
                        return index < 10 && (
                            <div className=' border-t-[1px] border-gray-200 flex items-center p-4 justify-between gap-1'>
                                <div className={`${index<3 ? 'bg-blue-500 text-white':'bg-gray-300'} text-[12px] rounded-full w-5 h-5 flex items-center justify-center p-1`}>{index +1}</div>
                                <div className=' text-[12px] font-medium text-gray-400 leading-4 overflow-hidden whitespace-nowrap text-ellipsis hover:text-blue-400 cursor-pointer max-w-[180px]'><Link to={`/truyen/${index}`}>{item.title}</Link></div>
                                <div className='text-[12px] font-medium text-gray-400'>{item.view}</div>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    );
}

export default CardCategoryLg;