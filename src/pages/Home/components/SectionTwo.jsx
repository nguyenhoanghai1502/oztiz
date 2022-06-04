import React from 'react'
import '../../../styles/_sectiontwo.scss';
import ImageGallery from '../../../components/ImageGallery';
import { iconsData } from '../../../data/icons';

import QualitySection from '../../../components/QualitySection';
function SectionTwo() {
  return (
    <div className="sectionTwo">
        <h1 className="title">Lastest Properties</h1>
        <ImageGallery/>
        <QualitySection icons={iconsData} style="quality" image="/assets/images/quality.jpg"/>
    </div>
  )
}

export default SectionTwo
