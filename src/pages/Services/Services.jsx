import React from 'react'
import QualitySection from '../../components/QualitySection';
import {iconsData} from '../../data/services/icons';
import '../../styles/services/_service.scss';
import ImageGallery from '../../components/ImageGallery';
import AgentGallery from '../../components/AgentGallery';
import {brand} from '../../data/services/brand';
import ScrollToTop from '../../components/ScrollToTop';
import Footer from "../../components/Footer";
function Services() {
  return (
    <div>
      <div className="service__header">
        <QualitySection icons={iconsData} style="col-6"/>
        <div className="header__img-container">
          <div className="img__container bottom">
            <div className="img">
              <img src="/assets/images/service/choose02.jpg" alt="" />
            </div>
            <h2 className="price">Price $89,000</h2>
          </div>
          <div className="img__container top">
            <div className="img">
              <img src="/assets/images/service/choose01.jpg" alt="" />
            </div>           
            <h2 className="price">Price $1,53,000</h2>
          </div>
        </div>
      </div>
      <div className="service__features">
        <h1 className="service__features-header">Featured Properites</h1>
        <p className="service__feature-lead">Ortiz is one of the most popular real estate company all around USA. You can find your dream <br/> property or build property with us. We always provide importance to our customer</p>
        <ImageGallery/>
      </div>
      <div className="service__agents">
        <AgentGallery/>
      </div>
      <div className="service__brands">
        {brand.map((item, index)=>{
          return (<div key={index}>
            <img src={item} alt="" />
          </div>)
        })}
      </div>
      <Footer/>
      <ScrollToTop/>

    </div>
  )
}

export default Services
