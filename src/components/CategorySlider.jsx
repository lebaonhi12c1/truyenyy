import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import '../subStyle/categorySlider.css'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
function CategorySlider(props) {
    const data = [
        {
            image: 'https://yymedia.codeprime.net/media/novels/202201/thumb_toan-chuc-nghe-thuat-gia-ban-dich-b4d2be83e8_120x180.jpg',
            title: 'Đệ nhất thần lâu',
            author: 'Vô thường',
            desc: 'được khởi động…” “ Chủ nhân có hay không nhân tân thủ đại lễ bao?” “ Có nhanh mở cho ta!!!” Tích~ “ Chúc mừng chủ nhân, nhận được thẻ tam tinh đấu vương..” “ Chúc mừng chủ nhân, nhận được Địa giai đấu kỹ…” “…..”',

        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/2020-07/thumb_3791db9651_120x180.jpg',
            title: 'Ta Thiên Đế Trọng Sinh Lại Là Phản',
            author: 'Vô thường',
            desc: 'được khởi động…” “ Chủ nhân có hay không nhân tân thủ đại lễ bao?” “ Có nhanh mở cho ta!!!” Tích~ “ Chúc mừng chủ nhân, nhận được thẻ tam tinh đấu vương..” “ Chúc mừng chủ nhân, nhận được Địa giai đấu kỹ…” “…..”',

        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Hùng Thiên Đại Lục',
            author: 'Vô thường',
            desc: 'được khởi động…” “ Chủ nhân có hay không nhân tân thủ đại lễ bao?” “ Có nhanh mở cho ta!!!” Tích~ “ Chúc mừng chủ nhân, nhận được thẻ tam tinh đấu vương..” “ Chúc mừng chủ nhân, nhận được Địa giai đấu kỹ…” “…..”',

        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/thumb_dai-thanh-truyen-ban-dich-a92cedaf3e_120x180.jpg',
            title: 'Nhất Niệm Trọng Sinh Thiên Đế Vô Thượng',
            author: 'Vô thường',
            desc: 'được khởi động…” “ Chủ nhân có hay không nhân tân thủ đại lễ bao?” “ Có nhanh mở cho ta!!!” Tích~ “ Chúc mừng chủ nhân, nhận được thẻ tam tinh đấu vương..” “ Chúc mừng chủ nhân, nhận được Địa giai đấu kỹ…” “…..”',

        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202204/thumb_thap-nien-70-lam-ruong-nuoi-con-bfe0e4f715_120x180.png',
            title: 'Đệ nhất thần lâu',
            author: 'Vô thường',
            desc: 'được khởi động…” “ Chủ nhân có hay không nhân tân thủ đại lễ bao?” “ Có nhanh mở cho ta!!!” Tích~ “ Chúc mừng chủ nhân, nhận được thẻ tam tinh đấu vương..” “ Chúc mừng chủ nhân, nhận được Địa giai đấu kỹ…” “…..”',
        },
    ]
    const [isindex, setisindex] = useState(0)
    const [hover, sethover] = useState(false)
    const handleSetindex = function(e){
        setisindex(e.activeIndex)
    }
    const handleSethover = function(){
        sethover(!hover)
    }
    return (
        <div className='bg-[#f4f4f4] rounded-lg flex flex-col p-4 relative' onMouseEnter={handleSethover} onMouseLeave={handleSethover}>
            <div className=' font-bold mb-4'>Sáng tác nhiều người đọc</div>
            <div className=''>
                <div className=' flex items-center gap-[2px] overflow-auto'>
                    <Swiper 
                        modules={[EffectCoverflow,Autoplay,Pagination]}
                        spaceBetween={5}
                        slidesPerView={3}
                        autoplay={true}
                        effect = 'coverflow'
                        className ='swiper_slider'
                        pagination = {{clickable: true}}
                        onSlideChange={function(e){handleSetindex(e)}}
                    >
                        <SwiperSlide>
                            <img src={data[data.length-1].image} alt="" width='80px' height='100px' className=' rounded-lg' />
                        </SwiperSlide>
                        {data.map((item,index)=>{
                                return (
                                        <SwiperSlide key={index}
                                        >
                                            <img src={item.image} alt="" width='80px' height='100px' className=' rounded-lg' />
                                        </SwiperSlide>
                                )
                            })}
                         <SwiperSlide>
                            <img src={data[0].image} alt="" width='80px' height='100px' className=' rounded-lg' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <div className='flex items-center justify-center gap-2 my-4'>
                    {data.map((item,index)=>{
                        return (
                            <div key={index} className={`w-2 h-2  rounded-full cursor-pointer hover:bg-gray-500 ${isindex === index ? 'bg-blue-500': 'bg-gray-400'}`} >
                                
                            </div>
                        )
                    })}
                </div> */}
            </div>
            <div className='text-center flex flex-col gap-2 mt-4'>
                <div className=' text-[16px] text-blue-500 font-bold'>{data[isindex].title}</div>
                <div className='text-[12px] font-bold'>{data[isindex].author}</div>
                <div className='text-[12px] text-slate-500'>{data[isindex].desc}</div>
                <Link to={`/truyen/${isindex}`} className=' p-2 bg-blue-500 text-white text-center w-[80px] self-center rounded-lg cursor-pointer hover:opacity-70'>Đọc thử</Link>
            </div>
            {hover && (<div className=' absolute top-3 right-3 text-blue-500 cursor-pointer'>
                <EastIcon/>
            </div>)}
        </div>
    );
}
export default CategorySlider;