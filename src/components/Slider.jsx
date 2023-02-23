import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function Slider(props) {
    const [isindex, setindex] = useState(0)
    const [width, setwidth] = useState(565)
    const width_slider = useRef()
    const img_array = [
        {
            image:'https://i.etsystatic.com/6311865/r/il/6aa153/913005725/il_fullxfull.913005725_tjmf.jpg',
            title: 'Tom and Jerry'
        },
        {
            image:'https://www.sneakers.fr/wp-content/uploads/2020/02/Tom-and-Jerry-Reebok-banner-1160x596.png',
            title: 'Tom and Jerry'
        },
        {
            image:'https://steemitimages.com/DQmUJLausCf5UWTuznjmqn1hVZWyAfLAKecTvALc5GjZ8UG/Tom-and-Jerry-love-at-first-sight-Desktop-HD-Wallpaper-2560x1600-1920x1200.jpg',
            title: 'Tom and Jerry'
        },
        {
            image:'https://cdn.shopclues.com/images/detailed/30438/ebTMAi8_1452850418.jpg',
            title: 'Tom and Jerry'
        },
    ]
    const handleSetIndex = (index)=>{
        setindex(index)
    }
    const autoSetIndex = function(){
        setindex(isindex === img_array.length -1 ? 0 : pre=>pre +1)
    }

    useEffect(() => {
      const time = setTimeout(() => {
        autoSetIndex()
      }, 2000);
      return () => {
        clearTimeout(time)
      }
    }, [isindex])
    useEffect(() => {
      const handleResize = ()=>{
        setwidth(width_slider.current.clientWidth)
      }
      window.addEventListener('resize',handleResize)
      return ()=>{
        window.removeEventListener('resize',handleResize)
      }
    }, [])
    return (
        <div className=' h-[300px] relative rounded-lg overflow-hidden '>
            <div>
                <div className={`flex transition-all duration-1000 w-full h-full`} 
                style={{
                    transform: `translateX(-${isindex * width}px)`,
                }} ref={width_slider}>
                    {img_array.map((item,index)=>{
                        return (
                            <Link to={`/truyen/${index}`} className='w-full h-full block flex-shrink-0'>
                                 <img src={item.image} alt="" className='w-full h-full object-cover' key={index}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className=' absolute bottom-0 left-0 right-0 bg-gray-800 text-white grid grid-cols-4'>
                {img_array.map((item,index)=>{
                    return (
                        <div className={`p-2 cursor-pointer hover:bg-blue-500 ${isindex === index && 'bg-blue-500'} text-center`} onClick={()=>{handleSetIndex(index)}}  key={index}>
                            {item.title}{index}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slider;