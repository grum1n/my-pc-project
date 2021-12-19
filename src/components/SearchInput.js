import React from 'react';

const SearchInput = () => {
  return (
    <form className="search-box flex-container">
        <input className="search-input" type="text" placeholder="Įveskite detalės kodą, gamintoją arba modelį" />
        <input className="search-button" type="button" value=" Ieškoti " />
    </form>
  );
};

export default SearchInput;
