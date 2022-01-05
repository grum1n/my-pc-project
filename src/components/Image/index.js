import React from 'react';

function Image(props) {
    return (
        <>
            <img src={props.url} alt={props.title} className={props.cName} />
        </>
    )
}

export default Image;
