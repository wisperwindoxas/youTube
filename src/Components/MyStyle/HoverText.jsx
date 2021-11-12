import React from 'react'

export default function HoverText({name, left}) {
  
    return (
        <div className="hover" style={{position: 'absolute', top:"60px", left:`${left}px`}}>
            <p>{name}</p>
        </div>
    )
}
