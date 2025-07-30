

import React from 'react';
import './Search.css'


function Search(){
// function Search({ setSearchTerm }) {
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value); // Update the search term in MainPage
//   };

  return (
    <>
    {/* <input 
      type="text" 
      placeholder="Search..." 
      onChange={handleSearchChange} 
    /> */}

    
    <div className="searchAndIcon">
      <div> 
        <img src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg"/>
      </div>
        
      <div className="Search">
        {/* <input type="text" className="textSearch" placeholder="Search "
       /> */}

         <input 
      type="text"      placeholder="Search..."    onChange={handleSearchChange}  className="textSearch"
    />

       
        {/* <input type="text" className="textSearch" placeholder="Search"></input> */}
      </div>
      </div>
       {/* <DataTable data={filteredData}  />  */}
    </>

    
    

  );
}

export default Search;
