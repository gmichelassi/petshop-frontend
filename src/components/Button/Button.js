import React from 'react'
import './Button.css'

function Button(props) {
    return(
        <button 
            className={ props.className + ' button-component' } 
            onClick={ props.onClick } 
            type={ props.type }
            style={ props.style }
        >
            { props.text }
        </button>
    )
}

export default Button