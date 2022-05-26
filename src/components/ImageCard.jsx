import React from 'react'
import Image from '../components/Image';
import '../styles/_imagecard.scss';
function ImageCard({title, image, style, properties, price, address}){
  return (
    <div className={"imageCard "+style}>
        <a href="/" className="img"><img src={image}  alt="" /></a>
      
      <a href="/" className="title">{title}</a>
      <p className="address">{address}</p>
      <p className="properties">{properties}</p>
      <h3 className="price">{"Price "+price}</h3>   
    </div>
  )
}
export default ImageCard;
