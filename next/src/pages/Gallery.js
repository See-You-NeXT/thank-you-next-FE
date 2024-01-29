import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Gallery.module.css';
import { FiUpload } from "react-icons/fi";

import SearchBar from '../components/SearchBar';
import Pagination from 'react-js-pagination';

import dataGallery from '../dataGallery';

function Gallery() {
  let navigate = useNavigate();

  //검색창
  const [filteredData, setFilteredData] = useState(dataGallery);

  const handleSearch = (search) => {
      const filteredResults = dataGallery.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredResults);
      setPage(1);
  };

  //페이지네이션
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalItemsCount = filteredData.length;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
};

  const rows = [];
  for (let i = 0; i < currentItems.length; i += 3) {
    const row = currentItems.slice(i, i + 3);
    while (row.length < 3) {
      row.push(null);
    }
    rows.push(row);
  }

  return (
    <div className={styles.galleryArea}>
      <div className={styles.galleryTitle}>
        갤러리
      </div>

      <div className={styles.funcArea}>
        <div className={styles.searchBarArea}>
          <SearchBar onSearch={handleSearch}/>
        </div>
        <div className={styles.uploadBtn} onClick={()=>{ navigate('/galleryUpload') }}>
          <FiUpload size={35}/>
        </div>
      </div>

      <div className={styles.galleryPicArea}>
        {rows.map((row, rowIndex) => (
          <div className={styles.galleryPicRow} key={rowIndex}>
            {row.map((item, index) => (
              <div className={styles.galleryPicBox} key={index}>
                {item && (
                  <>
                    <div className={styles.galleryPicImg}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className={styles.galleryPicTitle}>
                      {item.title}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Gallery;