import React from 'react'

import './styles/forms.css'

export function Button({className, ...props}) {
    return (
        <button className={`components-forms ${className}`} {...props}/>
    )
}
