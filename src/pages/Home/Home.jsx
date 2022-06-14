import React ,{Suspense} from 'react'
import '../../styles/_home.scss';
const SectionOne=React.lazy(()=>import( "./components/SectionOne"));
const SectionTwo=React.lazy(()=>import( "./components/SectionTwo"));
const Slider=React.lazy(()=>import('../../components/Slider'));
const SectionProperties=React.lazy(()=>import('./components/SectionProperties'));
const SectionAgents=React.lazy(()=>import('./components/SectionAgents'));
const SectionBlog=React.lazy(()=>import('./components/SectionBlog'))
function Home() {
  return (
    <div classname="home__container">
          <Slider/>            
        <Suspense fallback={<div>Loading ...</div>}>
          <SectionOne/>
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <SectionTwo/>
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <SectionProperties/>
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <SectionAgents/>
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <SectionBlog/>
        </Suspense>        
    </div>
  )
}

export default Home
