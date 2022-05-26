import React from 'react'
import '../styles/_slider.scss';
import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {sliderData} from '../data/slider';
function Slider() {
    const [currentSlide, setcurrentSlide] = useState(0);
    const slideLength=sliderData.length;
    let slideInterval;
    let intervalTime=5000;
    const autoScroll = true;
    const nextSlide=()=>{
        setcurrentSlide(currentSlide===slideLength-1 ? 0:currentSlide+1);
    }
    const prevSlide=()=>{
        setcurrentSlide(currentSlide===0 ? slideLength-1 : currentSlide-1);
    }
    function auto(){
        slideInterval=setInterval(nextSlide, intervalTime)
    }
    useEffect(() => {
        setcurrentSlide(0);
    }, []);
    useEffect(() => {
        if(autoScroll){
            auto();
        }
        return ()=> clearInterval(slideInterval);
    }, [currentSlide]);
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
      {sliderData.map((slider, index) =>{
          return(
              <div className={index===currentSlide?"slide current":"slide"} key={index}>
                  {index===currentSlide&&(
                      <>
                        <img src={slider.image} alt="slide" />                      
                        <div className="card">
                            <h2 className="name">{slider.name}</h2>
                            <h3 className="address">{slider.address}</h3>
                            <p className="properties">{slider.properties}</p>
                            <h3 className="price">{slider.cost}</h3>
                        </div>
                      </>                                            
                  )}
              </div>
          )
      })}
    </div>
  )
}

export default Slider
