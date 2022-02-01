import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchCarParts.css';

function SearchCarParts () {
    const [search, setSearch] = useState('')

   const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/autorized/carParts_search?carBrand=${search}`);
        setSearch('');
    }
    
    return (
        <form onSubmit={handleSubmit} className='add-car-form'>
            <input 
                type='text' 
                placeholder='Search car brand ...' onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </form>
    )
}
export default SearchCarParts;