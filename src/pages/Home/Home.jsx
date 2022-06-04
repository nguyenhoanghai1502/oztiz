import React from 'react'
import Slider from '../../components/Slider';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionProperties from './components/SectionProperties';
import SectionAgents from './components/SectionAgents';
import SectionBlog from './components/SectionBlog';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import '../../styles/_home.scss';
function Home() {
  return (
    <div classname="home__container">      
        <Slider/>
        <SectionOne/>
        <SectionTwo/>
        <SectionProperties/>
        <SectionAgents/>
        <SectionBlog/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default Home
