import React from 'react';
import './hero.css';

function Hero(props) {
    return (
        <section className='hero'>
            <h2>{ props.heading }</h2>
        </section>
    )
}

export default Hero;
