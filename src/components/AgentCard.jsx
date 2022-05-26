import React from 'react'
import '../styles/_agentcard.scss';
function AgentCard({image, name, description}) {
  return (
    <div className="card__container">
        <div className="card__img">
        <img src={image} alt=""  />
        </div>
      <h2 className="card__name">{name}</h2>
      <h3 className="card__description">{description}</h3>
      <div className="card__icon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-skype"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  )
}

export default AgentCard
