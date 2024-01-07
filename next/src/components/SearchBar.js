import React from 'react';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {

    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();

        onSearch(search);
    };

    return (
        <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="검색어를 입력하세요"
                maxLength={20}
                className={styles.searchInput}
            
            />
            <button type="submit" className={styles.searchButton}>
                <FaSearch size={17}/>
            </button>
        </form>
    )
}

export default SearchBar;