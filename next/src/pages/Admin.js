import React, { useState } from 'react';
import styles from './Admin.module.css';
import { FaUser } from "react-icons/fa6";

import SearchBar from '../components/SearchBar'; 
import Pagination from 'react-js-pagination';

import dataAdmin from '../dataAdmin';


function Admin() {
    
    //검색창
    const [userData, setUserData] = useState(dataAdmin);

    const handleSearch = (search) => {
        const filteredResults = dataAdmin.filter((item)=>
            item.name.includes(search) || item.studentId.includes(search)
            || item.email.toLowerCase().includes(search.toLowerCase())
        );
        setUserData(filteredResults);
        setPage(1);
    }

    //페이지네이션
    const [page, setPage] = useState(1);
    const itemsPerPage = 15;

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    const totalItemsCount = userData.length;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = userData.slice(startIndex, endIndex);

    

    return (
    <div className={styles.adminArea}>
        <div className={styles.adminTitleArea}>
            <div className={styles.adminTitle}>
                회원관리
            </div>
            <div className={styles.totalUser}>
                <FaUser className={styles.userIcon}/>{userData.length}
            </div>
            <div className={styles.searchBarArea}>
                <SearchBar onSearch={handleSearch}/>
            </div>
        </div>
        <div className={styles.usersListArea}>
            {
                currentItems.map((item,i)=>{
                    return(
                        <ListContent key={item.id} list={item} />
                    )
                })
            }
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

function ListContent(props){
    return(
        <div className={styles.usersListContent}>
            <div className={styles.usersListContentItems}>{props.list.name}</div>
            <div className={styles.usersListContentItems}>{props.list.studentId}</div>
            <div className={styles.usersListContentItems}>{props.list.email}</div>
            <div className={styles.usersListContentItems}>{props.list.joinDate}</div>
            <div className={styles.deleteUserBtn}>삭제</div>
        </div>
    )
}

export default Admin;