import React from 'react'
import '../styles/services/_agentslider.scss';
import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {agents} from '../data/services/agents';
import AgentInfor from '../components/AgentInfor';
function Slider() {
    const [currentSlide, setcurrentSlide] = useState(0);
    const [nextSlide, setnextSlide] = useState(1);

    const slideLength=agents.length;

    const nextSlider=()=>{
        setcurrentSlide(currentSlide===slideLength-1 ? 0:currentSlide+1);
        setnextSlide(currentSlide);
    }
    const prevSlide=()=>{
        setcurrentSlide(currentSlide===0 ? slideLength-1 : currentSlide-1);
        setnextSlide(currentSlide);
    }

  return (
    <div className="agent__slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlider}/>
      {agents.map((agent, index) =>{
          return(
              <div className={index===currentSlide||index===nextSlide?"slide current":"slide"} key={index}>
                  {(                    
                      <>
                        <AgentInfor name={agent.name} job={agent.job} description={agent.description} image={agent.image} />
                      </>                                            
                  )}
              </div>
              
          )
      })}
    </div>
  )
}
// {(index===currentSlide)?:"slide"}
export default Slider
