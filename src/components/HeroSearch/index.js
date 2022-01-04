import React from 'react';
import './heroSearch.css';

function HeroSearch(props) {
    return (
        <section className='heroSearch'>
            <h2>{ props.heading }</h2>
            <form className='search-box flex-container'>
                <input className='search-input' type='text' placeholder='Įveskite detalės kodą, gamintoją arba modelį' />
                <input className='search-button' type='button' value=' Ieškoti ' />
            </form>
        </section>
    )
}

export default HeroSearch;
