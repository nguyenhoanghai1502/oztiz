import React from 'react'
import '../styles/components/_agentinfor.scss';
function AgentInfor({name, job, description, image}) {
  return (
    <div className="agent__infor-container">
      <div className="agent__infor-img">
          <img src={image} alt="" />
          <div className="agent__infor-intro">
            <h2 className="agent__infor-name">{name}</h2>
            <p className="agent__infor-job">{job}</p>
          </div>
      </div>
      <div className="agent__infor-description">
          <p>{description}</p>
      </div>
    </div>
  )
}

export default AgentInfor
