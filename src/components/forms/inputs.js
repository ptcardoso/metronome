import React from 'react'

import './styles/forms.css'

export function Input({className, ...props}) {
    return (
        <input {...props} className={`components-forms ${className}`}/>
    )
}