import React from 'react'
import { forSaleData } from '../../../data/properties/forsale';
import {forRentData} from '../../../data/properties/forrent';
import ImageCard from '../../../components/ImageCard';
import {useState} from 'react';
import "../../../styles/_properties.scss";
function SectionProperties() {
    const [state, setstate] = useState(1);
    const toggleTab=(index)=>{
        setstate(index);
    }
  return (
    <div className="tab__container">
        <div className="tabs">
            <h2 className={state===1?"tabs__title active-tab":"tabs__title"} onClick={()=>toggleTab(1)}>Property For Sale</h2>
            <h2 className="tabs__title active-tab">/</h2>
            <h2 className={state===2?"tabs__title active-tab":"tabs__title"} onClick={()=>toggleTab(2)}>Property For Rent</h2>
        </div>
        <div className="tab__panes">
            <div className={state===1?"tab__pane active-tabpane":"tab__pane"}>
                {forSaleData.map((item, index)=>{
                    return(
                        <ImageCard 
                        key={index}
                        style="col-4"
                        title={item.title} 
                        image={item.image} 
                        properties={item.properties} 
                        price={item.price} 
                        address={item.address}/>
                    )
                })}
            </div>
            <div className={state===2?"tab__pane active-tabpane":"tab__pane"}>
                {forRentData.map((item, index)=>{
                        return(
                            <ImageCard 
                            key={index}
                            style="col-4"
                            title={item.title} 
                            image={item.image} 
                            properties={item.properties} 
                            price={item.price} 
                            address={item.address}/>
                        )
                    })}
            </div>
        </div>
        <div className="footer__container">
            <div className="footer__left">
                <h2 className="title">Desilva De Villa</h2>
                <h3 className="address">24 North Street, California, USA</h3>
                <p className="properties">6500 sqft, 7 Bed, 5 Bath, 3 Garage</p>
                <h2 className="price">For Sale $54,000</h2>
                <div className="img__container">
                    <img src="/assets/images/property2.jpg" alt="" />
                    <img src="/assets/images/property3.jpg" alt="" />
                    <img src="/assets/images/property4.jpg" alt="" />
                </div>
            </div>
            <div className="footer__right">
                <img src="/assets/images/property1.jpg" alt="" />
                <h2>Call Us 01245 025 654</h2>
            </div>
        </div>
    </div>
  )
}

export default SectionProperties
