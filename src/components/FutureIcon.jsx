import React from 'react';
import '../styles/_futureicon.scss';

function FutureIcon({title, icon, content}) {
  return (
    <div className="icon__container">
      <img src={icon} alt="" />
      <div>
      <h2 className="icon__title">{title}</h2>
      <p className="icon__content">{content}</p>
      </div>
    </div>
  )
}

export default FutureIcon
