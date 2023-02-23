import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../HomeNavbar';
import Footer from '../Footer';
import ScrollTop from '../../components/ScrollTop';
import Contact from './../../components/Contact';
function HomeLayout({children}) {
    const [scroll, setscroll] = useState(false)
    useEffect(() => {
      const handleScroll = ()=>{
        if(window.scrollY >=200){
            setscroll(true)
        }
        else{
            setscroll(false)
        }
      }
      window.addEventListener('scroll',handleScroll)
    
      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    }, [])
    return (
        <div>
            <HomeNavbar/>
              {children}
            <Footer/>
            {scroll &&<ScrollTop/>}
            <Contact/>
        </div>
    );
}

export default HomeLayout;