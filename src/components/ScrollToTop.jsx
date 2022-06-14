import React from 'react'
import {useState, useEffect} from 'react';
import '../styles/components/_scrolltotop.scss';
function ScrollToTop() {
    const [visible, setvisible] = useState(false);
    const toggleVisibility =()=>{
        if(window.pageYOffset>300){
            setvisible(true);
        }else{
            setvisible(false);
        }
    }
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    }
    useEffect(() => {
        window.addEventListener('scroll',toggleVisibility);
        return()=>{
            window.removeEventListener('scroll',toggleVisibility);
        }
    }, [])
  return (      
    <div className="button__scrollTop">
      <button className={visible? "button active":"button"} type="button" onClick={scrollToTop}>
      <i class="fa-solid fa-angles-up"></i>
      </button>
    </div>
  )
}
export default ScrollToTop
