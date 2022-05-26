import React from 'react'
import Image from '../../../components/Image';
import '../../../styles/_section1.scss';
function SectionOne() {
  return (
    <div className="section1">
      <div className="row">
        <Image image="/assets/images/image1.jpg" title="Home" tag="For rent" style="col-3" />
        <Image image="/assets/images/image2.jpg" title="Appartment" tag="For sale" style="col-7" />
      </div>
      <div className="row">
        <Image image="/assets/images/image3.jpg" title="Office" tag="For sale" style="col-7" />
        <Image image="/assets/images/image4.jpg" title="Farm House" tag="For rent" style="col-3" />
      </div>
    </div>
  )
}

export default SectionOne
