import React from 'react';

function Button(props) {
    return (
        <button variant='primary' className={props.cName} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button;
