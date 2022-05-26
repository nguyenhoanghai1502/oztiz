import React from 'react'
import '../../../styles/_sectiontwo.scss';
import ImageGallery from './ImageGallery';
import FutureIcon from '../../../components/FutureIcon';
import { iconsData } from '../../../data/icons';
function SectionTwo() {
  return (
    <div className="sectionTwo">
        <h1 className="title">Lastest Properties</h1>
        <ImageGallery/>
        <div className="quality">
          <img src="/assets/images/quality.jpg" alt="" className="quality__img" />
          <div className="quality__content">
            <h1 className="quality__title">We never compromize <br></br>
            with quality work...</h1>
            <p className="quality__lead">Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property</p>
            <div className="quality__icons">
              {iconsData.map((item, index) =>{
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
    </div>
  )
}

export default SectionTwo
