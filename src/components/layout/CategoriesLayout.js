import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import CategoryNav from '../CategoryNav';
import ScrollTop from '../ScrollTop';
import FeedBackCategoryLayout from '../FeedBackCategoryLayout';
function CategoriesLayout({children}) {
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
            <CategoryNav/>
                {children}
            <Footer/>
            {scroll && <ScrollTop/>}
            <FeedBackCategoryLayout/>
        </div>
    );
}

export default CategoriesLayout;