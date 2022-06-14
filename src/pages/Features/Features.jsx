import React from 'react'
import QualitySection from '../../components/QualitySection';
import {iconsData} from '../../data/services/icons';
import '../../styles/features/_features.scss';
import {brand} from '../../data/services/brand';
function Features() {
  return (
    <div>
      <div className="feature__header">
        <div className="feature__header__img-container">
          <div className="feature__img__container bottom">
            <div className="img">
              <img src="/assets/images/service/choose02.jpg" alt="" />
            </div>
            <h2 className="price">Price $89,000</h2>
          </div>
          <div className="feature__img__container top">
            <div className="img">
              <img src="/assets/images/service/choose01.jpg" alt="" />
            </div>           
            <h2 className="price">Price $1,53,000</h2>
          </div>
        </div>
        <QualitySection icons={iconsData} style="col-6"/>
      </div>
      <div className="service__brands">
        {brand.map((item, index)=>{
          return (<div key={index}>
            <img src={item} alt="" />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Features
