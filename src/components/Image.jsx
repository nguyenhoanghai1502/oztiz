import React from 'react'
import '../styles/_image.scss';
export default Image=({title, image, tag, style}) =>{
  return (
    <div className={"image "+style}>
      <img src={image} alt="image" />
      <h2 className="title">{title}</h2>
      <h3 className="tag">{tag}</h3>
    </div>
  )
}

