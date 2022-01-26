import React from 'react';
import { useNavigate } from 'react-router-dom';
import './linksButton.css';

const LinksButton = ({ redirectPath, name }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(redirectPath, { replace: true })
        // console.log(name)
    }

    return (
        <button className='links-button' onClick={ onClick }>
            {name}
        </button>
    )
}

export default LinksButton;