import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HintProductList from './HintProductList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../subStyle/centernav.css'
import CheckIcon from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/Devices';
import { useClickOutSide } from '../global_function';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchIcon from '@mui/icons-material/Search';
function CenterNav(props) {
    const [ismodal, setismodal] = useState(false)
    const [searchValue, setsearchValue] = useState('')
    const [index, setindex] = useState(1)
    const [setting, setsetting] = useState(false)
    const [settingMessage, setsettingMessage] = useState(false)
    const [opennofication, setopennofication] = useState(false)
    const [openmessage, setopenmessage] = useState(false)
    const isLogin = false
    const nofication_data = [
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },
        {
            image: 'https://ps.w.org/wp-notification-bell/assets/icon-256x256.png?rev=2439614',
            title:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque accusamus sequi dolorum tenetur facere commodi illo odit inventore amet, quod tempora facilis rem tempore beatae voluptatibus, repudiandae ut. Quasi.',
        },

    ]
    const message_data = [
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
        {
            image: 'https://manager.almadarisp.com/user/img/user.png',
            title: 'Username',
            sub: 'User message',
            time: '12:12'
        },
    ]
    const handelClosemodal = ()=>{
        setismodal(false)
    }
    const handelOpenmodal = ()=>{
        setismodal(true)
    }
    const handleSearchValue = (e)=>{
        setsearchValue(e.target.innerText)
        setismodal(false)
    }
    const handleOpenSetting = ()=>{
        setsetting(true)
    }
    const handleOpenNoficationBox = ()=>{
        setopennofication(true)
        !isLogin && notify()
    }
    const handleOpenMessage = ()=>{
        setopenmessage(true)
        !isLogin && notifyMessage()
    }
    const handleOpenSettingMessage= ()=>{
        setsettingMessage(true)
    }
    const notify = () => toast.info("Cần đăng nhập để xem thông báo!",{
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifyMessage = ()=> toast.info('Cần đăng nhập để xem hộp thư',{
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    const nodeNofication = useClickOutSide(()=>{setopennofication(false)})
    const nodeSetting = useClickOutSide(()=>{setsetting(false)})
    const nodeMessage = useClickOutSide(()=>{setopenmessage(false)})
    const nodeSettingMessage = useClickOutSide(()=>{setsettingMessage(false)})
    return (
        <div className='root_container py-5'>
            <div className=" flex items-center justify-between">
                <div>
                    <img src="https://blue-cat.fr/wp-content/uploads/2021/11/Logo_BlueCat_Cat_RVB.png" alt="" className=' w-[80px] h-[50px]'/>
                </div>
                <div className='flex items-center relative'>
                    <input type="search" className='w-[400px] h-[40px] border-gray-400 border rounded-l-md px-4 focus-visible:outline-blue-400 focus-visible:rounded-r-none focus-visible:shadow-blue-500 focus-visible:shadow-sm z-10' placeholder='Tìm tên tuyện, tác giả...'  onFocus={handelOpenmodal} value={searchValue} onChange={(e)=>{setsearchValue(e.target.value)}} onKeyDown={()=>{setismodal(false)}}/>
                    <div className='btn_primary w-[50px] h-[40px] rounded-r-md z-10 cursor-pointer hover:opacity-80'>
                        <SearchOutlinedIcon/>
                    </div>
                    <div className={`absolute top-full left-0 p-5 bg-white shadow-blue-400 shadow-md w-[600px] ${ismodal ? 'block':'hidden'} z-20`}>
                        <div className=' font-bold text-xl'>Từ Khóa Phổ Biến</div>
                        <div className=' flex flex-wrap items-center gap-2 my-4'>
                            <div className=' text-white px-2 rounded-md bg-blue-500 cursor-pointer text-sm' onClick={(e)=>{handleSearchValue(e)}}>con đường bá chủ</div>
                            <div className=' text-white px-2 rounded-md bg-blue-500 cursor-pointer text-sm' onClick={(e)=>{handleSearchValue(e)}}>đấu la</div>
                            <div className=' text-white px-2 rounded-md bg-blue-500 cursor-pointer text-sm' onClick={(e)=>{handleSearchValue(e)}}>hệ thống</div>
                            <div className=' text-white px-2 rounded-md bg-blue-500 cursor-pointer text-sm' onClick={(e)=>{handleSearchValue(e)}}>hokage</div>
                        </div>
                    </div>
                    {searchValue!== '' && <HintProductList value={searchValue}/>}
                </div>
                <div className=' flex items-center gap-9 color_primary '>
                    <div className='relative' onClick={handleOpenMessage}>
                        <MailOutlineIcon className=' cursor-pointer '/>
                        {openmessage && isLogin && (
                            <div className=' absolute top-full -right-6 bg-white z-10 h-[600px] w-[360px] rounded-lg shadow-md overflow-hidden shadow-gray-600 duration-300 flex flex-col ' ref={nodeMessage}>
                                <div className='overflow-y-auto nofication flex-1 p-4'>
                                    <div className=' flex items-center justify-between'>
                                        <div className=' font-bold text-[20px] text-black'>Hộp thư cá nhân</div>
                                        <div className=' cursor-pointer text-black rounded-full hover:bg-slate-300 p-1 relative' onClick={handleOpenSettingMessage}>
                                            <MoreHorizIcon/>
                                            {settingMessage && (
                                                <div className=' p-2 bg-white absolute top-full right-0 shadow-sm shadow-slate-500 w-[300px] font-medium rounded-lg' ref={nodeSettingMessage}>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <CheckIcon/>
                                                        <span>Đánh dấu tất cả là đã đọc</span>
                                                    </div>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <SettingsIcon/>
                                                        <span>Cài đặt hộp thư</span>
                                                    </div>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <DevicesIcon/>
                                                        <span>Mở hộp thư</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 my-2'>
                                        <div className={`${index === 1 ? 'text-blue-500 bg-blue-200 hover:bg-blue-300':' hover:bg-slate-100 text-black'} rounded-[40px] px-2 py-1 font-bold cursor-pointer`}>Hộp thư</div>
                                        <div className={`${index === 2 ? 'text-blue-500 bg-blue-200 hover:bg-blue-300':' hover:bg-slate-100 text-black'} rounded-[40px] px-2 py-1 font-bold cursor-pointer`}>Cộng đồng</div>
                                    </div>
                                    <div className='flex items-center gap-2 w-full bg-slate-200 p-1 rounded-[40px]'>
                                        <SearchIcon/>
                                        <input type="search" className=' bg-transparent focus-within:border-none focus-within:outline-none flex-1' placeholder='Tìm kiếm trên truyenYY...' />
                                    </div>        
                                    <div className='mt-4'>
                                        {message_data.map((item,index)=>{
                                            return (
                                                <div className=" flex items-center gap-2 text-black overflow-hidden cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
                                                    <div className='w-[90px] rounded-full overflow-hidden'>
                                                        <img src={item.image} alt="" className='w-full object-cover' />
                                                    </div>
                                                    <div>
                                                        <div className=' font-bold'>{item.title}</div>
                                                        <div className='flex items-center text-[12px] gap-2'>
                                                            <div className="sub">{item.sub}</div>
                                                            <div>{item.time}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    
                                </div>
                                <div className=' text-center cursor-pointer p-4 hover:bg-slate-200' >Xem tất cả</div>
                            </div>
                        )}
                        {openmessage && !isLogin && (
                            <ToastContainer/>
                        )}
                    </div>
                    <div className=' relative' onClick={handleOpenNoficationBox}>
                        <NotificationsNoneIcon className=' cursor-pointer '/>
                        {opennofication && isLogin && (
                            <div className=' absolute top-full -right-6 bg-white z-10 overflow-y-auto h-[600px] w-[360px] rounded-lg shadow-md shadow-gray-600 p-4 nofication duration-300' ref={nodeNofication}>
                            {/* <div>Cần đăng nhập để xem thông báo</div> */}
                                <div>
                                    <div className=' flex items-center justify-between'>
                                        <div className=' font-bold text-[20px] text-black'>Thông báo</div>
                                        <div className=' cursor-pointer text-black rounded-full hover:bg-slate-300 p-1 relative' onClick={handleOpenSetting}>
                                            <MoreHorizIcon/>
                                            {setting && (
                                                <div className=' p-2 bg-white absolute top-full right-0 shadow-sm shadow-slate-500 w-[300px] font-medium rounded-lg' ref={nodeSetting}>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <CheckIcon/>
                                                        <span>Đánh dấu tất cả là đã đọc</span>
                                                    </div>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <SettingsIcon/>
                                                        <span>Cài đặt thông báo</span>
                                                    </div>
                                                    <div className=' p-2 hover:bg-slate-200 flex items-center gap-4 rounded-lg'>
                                                        <DevicesIcon/>
                                                        <span>Mở thông báo  </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 my-2'>
                                        <div className={`${index === 1 ? 'text-blue-500 bg-blue-200 hover:bg-blue-300':' hover:bg-slate-100 text-black'} rounded-[40px] px-2 py-1 font-bold cursor-pointer`}>Tất cả</div>
                                        <div className={`${index === 2 ? 'text-blue-500 bg-blue-200 hover:bg-blue-300':' hover:bg-slate-100 text-black'} rounded-[40px] px-2 py-1 font-bold cursor-pointer`}>Chưa đọc</div>
                                    </div>
                                    <div className=' flex items-center justify-between text-black'>
                                        <div className=' text-[18px] font-bold'>Trước đó</div>
                                        <div className=' text-blue-500 hover:bg-slate-100 text-center p-2 rounded-lg cursor-pointer'>Xem tất cả</div>
                                    </div>
                                    <div>
                                        {nofication_data.map((item,index)=>{
                                            return (
                                                <div className=" flex items-center gap-2 text-black overflow-hidden cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
                                                    <div className='w-[500px] rounded-full overflow-hidden'>
                                                        <img src={item.image} alt="" className='w-full object-cover' />
                                                    </div>
                                                    <div>
                                                        <div style={{
                                                            fontSize: '14px',
                                                            height: '54px',
                                                            lineHeight:'18px',
                                                            overflow: 'hidden',
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: '3'
                                                        }}>
                                                            {item.title}
                                                        </div>
                                                        <div className='text-[12px] text-slate-500'>1 ngày</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                        {opennofication && !isLogin && (
                            <ToastContainer/>
                        )}
                    </div>
                    <div>
                        <BookmarkBorderIcon className=' cursor-pointer '/>
                    </div>
                </div>
            </div>
            {ismodal && (<div className=" fixed top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-20 z-1" onMouseDown={handelClosemodal}>
            </div>)}
        </div>
    );
}

export default CenterNav;