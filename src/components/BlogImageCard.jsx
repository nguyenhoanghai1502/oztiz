import React from 'react'
import '../styles/_blogimage.scss';
function BlogImageCard({title, image, time, description,onclick}) {
  return (
    <div className="container">
      <div className="img__container">
          <img src={image} alt="" />
      </div>
      <div className="content__container">
          <h2 className="title">{title}</h2>
          <p className="time">{time}</p>
          <p className="description">{description}</p>
          <a href="/" className="button" onClick={onclick}>Read more</a>
      </div>
    </div>
  )
}

export default BlogImageCard
