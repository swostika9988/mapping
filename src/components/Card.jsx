import React from 'react'

const Card = ({id,name,emoji,meaning}) => {
  return (
      <div>
        <div className="term">
          {id}
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span>{name}</span>
        </dt>
        <dd>
         {meaning}
        </dd>
      </div>
    </div>
  )
}

export default Card