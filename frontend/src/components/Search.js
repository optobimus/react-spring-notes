import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch }) => {
    return(
        <div className="search">
            <MdSearch className="search-icon" size="1.25em" />
            <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Notiz suchen..."></input>
        </div> 
    )
}

export default Search;