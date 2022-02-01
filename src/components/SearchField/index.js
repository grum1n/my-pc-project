import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchField.css';
import * as FaIcons from 'react-icons/fa';

function SearchField (props) {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(props.navigatePath + search);
        setSearch('');
    }
    
    return (
        <form onSubmit={handleSubmit} className='search-component-form'>
            <div className='search-component-wrapper'>
                <button type='submit' style={{ backgroundColor: props.buttonColor }}><FaIcons.FaSearch /></button>
                <input 
                    type='text' 
                    placeholder={props.placehoderText} 
                    onChange={(event) => setSearch(event.target.value)}
                    value={search} 
                />
            </div>
        </form>
    )
}
export default SearchField;