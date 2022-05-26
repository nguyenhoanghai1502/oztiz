import React from 'react'
import AgentCard from '../../../components/AgentCard';
import {agentsData} from '../../../data/agents';
import '../../../styles/_sectionagent.scss'
import CountUp from 'react-countup';
function SectionAgents() {
  return (
    <div className="agent__container">
      <div className="header__container">
          <h2 className="header__title">Our Agents</h2>
          <p className="header__lead">one of the most popular real estate company all around USA. You <br />
can find your dream property or build property with us</p>
      </div>
      <div className="img__container">
          {agentsData.map((item, index)=>{
              return (
                  <AgentCard key={index} image={item.image} name={item.name} description={item.description}/>                
              )
          })}
      </div>
      <div className="counter__container">
          <div>
              <CountUp className="counter" end={900}/>
            <h2 className="counter__title">Property Sale</h2>
          </div>
          <div>
            <CountUp className="counter" end={125}/>
            <h2 className="counter__title">Employee</h2>
          </div>
          
            <div>
            <CountUp className="counter" end={220}/>
          <h2 className="counter__title">Happy Clients</h2>
            </div>
          
          <div>
          <CountUp className="counter" end={850}/>
          <h2 className="counter__title">Property Available</h2>
          </div>
      </div>
    </div>
  )
}

export default SectionAgents
