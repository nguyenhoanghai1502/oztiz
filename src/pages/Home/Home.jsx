import React ,{Suspense} from 'react'
import '../../styles/_home.scss';
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Slider from'../../components/Slider';
import SectionProperties from'./components/SectionProperties';
import SectionAgents from'./components/SectionAgents';
import SectionBlog from'./components/SectionBlog';
function Home() {
  return (
    <div classname="home__container">
          <Slider/>                    
          <SectionOne/>        
          <SectionTwo/>        
          <SectionProperties/>        
          <SectionAgents/>       
          <SectionBlog/>      
    </div>
  )
}

export default Home
