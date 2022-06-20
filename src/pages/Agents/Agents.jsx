import React from 'react'
import {allagents} from "../../data/agents/allagents";
import AgentCard from "../../components/AgentCard";
import "../../styles/agents/_agentpage.scss";
function Agents() {
  return (
    <div className="agents__page__container">
      {allagents.map((item, index)=>{return(
        <AgentCard key={index} image={item.image}
        name={item.name}
        description={item.description} />
      )})}
    </div>
  )
}

export default Agents
