import React from 'react'
import {imageData} from '../../../data/imagegallery';
import ImageCard from '../../../components/ImageCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGallery() {
    const settings = {
        dots: true,
        autoplay:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    
      <Slider {...settings}>
            {imageData.map((images, index) =>{
                return(
                    <ImageCard className="image__card" key={index} title={images.title} 
                    image={images.image} 
                    address={images.address} 
                    properties={images.properties} 
                    price={images.price}/>                                       
                )
            })}    
      </Slider>

  )
}

export default ImageGallery
