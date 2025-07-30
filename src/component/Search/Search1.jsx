
import React from "react";
import './Search1.css'
import React, { useState } from 'react';

function Search1({ onSearchChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onSearchChange(value); // Communicate the search term to the parent
  };


// function Search1(){
    return(<>
   
    <div className="searchAndIcon1">
      <div> 
        <img src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg"/>
      </div>
        
      <div className="Search1">
        <input type="text" className="textSearch1" placeholder="Search..."  value={inputValue}
      onChange={handleChange}></input>
      </div>
      </div>
    
    </>)
}
export default Search1;
