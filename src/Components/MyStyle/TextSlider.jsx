import React from 'react'

export default function textSlider({children, ...props}) {
    
    return (
        <button {...props} >
            {children}
        </button>
    )
}
