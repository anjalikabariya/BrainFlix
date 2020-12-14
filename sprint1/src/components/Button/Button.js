import React from 'react';
import './Button.scss';
function Button(props) {
    return (
        <div>
            <button className="button__component">
                {props.icon}
                {props.name}
            </button>
        </div>
    )
}

export default Button;
