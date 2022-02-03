import React from 'react';
import SearchField from '../SearchField';
import './heroSearch.css';

function HeroSearch(props) {  
    return (
        <section className='heroSearch'>
            <h2 className='heroSearch-h2'>{ props.heading }</h2>
            <SearchField
                navigatePath={`/search?carPartName=`}
                placehoderText='Detalės pavadinimas ...'
            />
        </section>
    )
}

export default HeroSearch;
