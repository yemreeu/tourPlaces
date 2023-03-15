import React from 'react'
import "./style.css"

function Card(props) {
    
const { key,title,desc,image } = props;
  return (
    <div className='card'>
        <div key={key} className='card-title'>
            <h2>{title}</h2>
        </div>
        <img src={image} alt={title} />
        <div className='card-desc'>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card;