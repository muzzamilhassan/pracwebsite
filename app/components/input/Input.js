import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.place} required />
        </div>
    )
}
export default Input