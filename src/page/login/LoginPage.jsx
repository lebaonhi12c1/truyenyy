import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
function LoginPage(props) {
    const [isRecaptcha,setIsRecaptcha] = useState(false) // thiết lập giá trị recaptcha nếu false vô hiệu hóa button đăng nhập, true mở khóa button đăng nhập
    const [isPassword,setIsPassword] = useState(false)// thiết lập công tắc hiện thị password
    const handleCheckBoxChange = function(){
        //set giá trị cho isPassword
        setIsPassword(!isPassword)
    }
    function onChange(value) {
        //set giá trị recapcha thành true
        setIsRecaptcha(true)
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0'>
             <img src="https://wallpaperaccess.com/full/3383019.jpg" alt="" className='w-full h-full object-cover' />
             <div className=' absolute left-[50px] w-[480px] top-1/2 -translate-y-1/2'>
                <div className=' text-white text-[24px] my-4'><span className='border-b-[1px] border-orange-400'>Beta</span><span>Truyen</span></div>
                <div className='flex flex-col gap-4 text-white p-[50px] bg-[rgba(0,0,0,0.4)] rounded-lg'>
                    <div className='flex flex-col gap-2'>
                        <div className=' p-[12px] bg-blue-500 hover:bg-blue-600 rounded-lg flex gap-1 uppercase items-center justify-center select-none'>
                            <GoogleIcon/>
                            <span>đăng nhập với google/gmail</span>
                        </div>
                        <div className=' p-[12px] bg-blue-700 hover:bg-blue-800 rounded-lg flex gap-1 uppercase items-center justify-center select-none'>
                            <FacebookIcon/>
                            <span>đănh nhập với facebook</span>
                        </div>
                        <div className=' p-[12px] bg-white hover:bg-gray-200 rounded-lg flex gap-1 uppercase items-center justify-center select-none text-black'>
                            <AppleIcon/>
                            <span>đăng nhập với apple</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div className=' border-b-[1px] border-gray-500 w-full'></div>
                        <div className=' uppercase text-[12px]'>Hoặc</div>
                        <div className=' border-b-[1px] border-gray-500 w-full'></div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input type="text" name="username" id="username" placeholder='Tên tài khoản hoặc email' className='p-[10px] rounded-lg bg-[#444]' />
                        <input type={`${isPassword ? 'text': 'password'}`} name="user_password" id="user_password" placeholder='Mật khẩu' className='p-[10px] rounded-lg bg-[#444]' />
                        <label htmlFor="checkbox" className='flex itemcen gap-2'>
                            <input type="checkbox" name="checkbox" id="checkbox" className='w-[20px] h-[20px] block' onChange={handleCheckBoxChange}/>
                            <span className=''>Hiện thị mật khẩu</span>
                        </label>
                    </div>
                    <div>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            onChange={onChange}
                        />
                    </div>
                    <div className={`p-[12px] text-center uppercase rounded-lg select-none duration-300 ${isRecaptcha ? 'bg-orange-500 hover:bg-orange-600 cursor-pointer': 'bg-gray-200 text-black'}`}>
                        tiến hành đăng nhập
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Link className=' hover:text-orange-500 text-[12px]'>Đăng ký tài khoản mới</Link>
                        <Link className=' hover:text-orange-500 text-[12px]'>Quên mật khẩu??</Link>
                        <Link className=' hover:text-orange-500 text-[12px]'>Cần trợ giúp?</Link>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default LoginPage;