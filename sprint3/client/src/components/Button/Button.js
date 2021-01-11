import React from 'react';
import './Button.scss';
function Button(props) {
    return (
        <div className="button__container">
            <button className="button__component">
                {props.icon}{props.name}
            </button>
        </div>
    )
}

export default Button;
