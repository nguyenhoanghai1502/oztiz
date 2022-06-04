import React from 'react';
import { useState } from 'react';
import FutureIcon from './FutureIcon';
import '../styles/components/_qualitysection.scss';
function QualitySection({icons, style, image}) {
  return (
    <div  className={style=="quality"?"quality":style + " quality"}>
    {<img src={image} alt="" className="quality__img" />}
    <div className="quality__content">
      <h1 className="quality__title">We never compromize <br></br>
      with quality work...</h1>
      <p className="quality__lead">Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property</p>
      <div className="quality__icons">
        {icons.map((item, index) =>{
          return(
            <div key={index}>
              {item.map((icon, key)=>{
              return(
                <FutureIcon key={key} title={icon.title} icon={icon.icon} content={icon.content}/>
              );
            })}
            </div>
            );          
        })}
      </div>
    </div>
  </div>
  )
}

export default QualitySection
