import React from 'react'
import BlogImageCard from '../../../components/BlogImageCard';
import {blogData} from '../../../data/blog';
import '../../../styles/_sectionblog.scss'
function SectionBlog() {
  return (
    <div className="blog__container">
      <h2 className="title">Lastest Blog Post</h2>
      <p className="lead">One of the most popular real estate company all around USA. You
        <br /> can find your dream property or build property with us</p>
      <div className="img__container">
        {blogData.map((item, index)=>{
          return(
            <BlogImageCard image={item.image} title={item.title} time={item.time} description={item.description}/> 
          )
        })}
      </div>
    </div>
  )
}

export default SectionBlog
