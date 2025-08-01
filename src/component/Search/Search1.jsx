

import React from 'react';
import './Search1.css';

function Search1({ OnSearch, searchValue, placeholder }) {
  return (
    <div className="searchAndIcon1">
      <div>
        <img src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg" alt="search icon" />
      </div>

      <div className="Search1">
        <input type="text" className="textSearch1" placeholder={placeholder}  value={searchValue} onChange={OnSearch} />
           {/* <input type="text" className="textSearch1" placeholder="Search..."  value={inputValue}
//       onChange={handleChange}></input> */}
      </div>
    </div>
  );
}

export default Search1;