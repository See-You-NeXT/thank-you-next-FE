/*
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Pagination from "react-js-pagination";
import "./PagingQuestion.css";
import { PiNotePencil } from "react-icons/pi";

import SearchBar from "./SearchBar";

import dataQuestion from '../dataQuestion'; 

function Paging(){
    let navigate = useNavigate();

    //검색창
    const [filteredData, setFilteredData] = useState(dataQuestion);

    const handleSearch = (search) => {
        const filteredResults = dataQuestion.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredResults);
        setPage(1);
    };

    //페이지네이션
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    const totalItemsCount = filteredData.length;
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);


    return(
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="userFuncArea">
                <div className="total">TOTAL {filteredData.length}</div>
                <div className="writingBtn" onClick={()=>{ navigate('/writePost') }}>
                    <PiNotePencil size={35}/>
                </div>
            </div>
            
            <div className="questionListArea">
                <div className="questionListTitle">
                    <div className="questionListTitleItems">작성자</div>
                    <div className="questionListTitleItems">제목</div>
                    <div className="questionListTitleItems">날짜</div>
                    <div className="questionListTitleItems">진행</div>
                </div>
                {
                    currentItems.map((item,i)=>{
                        return(
                            <ListContent key={item.id} list={item}/>
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
        </>
    );
}


function ListContent(props){
    return(
        <div className="questionListContent">
            <div className="questionListContentItems">{props.list.name}</div>
            <div className="questionListContentItems">{props.list.title}</div>
            <div className="questionListContentItems">{props.list.date}</div>
            <div className="questionListContentItems">{props.list.solve}</div>
        </div>
    )
}

export default Paging;*/

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Pagination from "react-js-pagination";
import "./PagingQuestion.css";
import { PiNotePencil } from "react-icons/pi";

import SearchBar from "./SearchBar";

import instance from "../api/Axios";

function PagingQuestion() {
    let navigate = useNavigate();

    // 검색창
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const itemsPerPage = 10;
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        fetchPosts();
    }, [page, keyword]); // page, keyword가 변경될 때마다 데이터 가져오기

    const fetchPosts = async () => {
        try {
            const response = await instance.get('/api/posts', {
                params: {
                    dType: 'QUESTION',
                    page: page - 1, // 서버에서 페이지는 0부터 시작하므로 -1 해줍니다.
                    size: itemsPerPage,
                    sort: 'string',
                    keyword: keyword
                }
            });

            console.log('응답 데이터:', response.data);

            if (response.data.isSuccess) {
                const { simplePostDtoList, pageDto } = response.data.result;
                // 데이터를 최신순으로 정렬 (createdAt 기준 내림차순)
                const sortedData = simplePostDtoList.sort((a, b) => new Date(b.auditingDto.createdAt) - new Date(a.auditingDto.createdAt));
                setFilteredData(sortedData);
                setTotalItemsCount(pageDto.totalElements);
            } else {
                console.error('데이터 가져오기 실패:', response.data.message);
            }
        } catch (error) {
            console.error('데이터 가져오기 에러:', error);
        }
    };

    const handleSearch = (searchKeyword) => {
        setKeyword(searchKeyword);
        setPage(1); // 검색 시 페이지를 첫 페이지로 초기화
    };

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="userFuncArea">
                <div className="total">TOTAL {totalItemsCount}</div>
                <div className="writingBtn" onClick={() => { navigate('/writePost') }}>
                    <PiNotePencil size={35} />
                </div>
            </div>
            
            <div className="questionListArea">
                <div className="questionListTitle">
                    <div className="questionListTitleItems">작성자</div>
                    <div className="questionListTitleItems">제목</div>
                    <div className="questionListTitleItems">날짜</div>
                    <div className="questionListTitleItems">진행</div>
                </div>
                {
                    currentItems.map((item, i) => {
                        return (
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
        </>
    );
}

function ListContent({ list }) {
    // 날짜 형식 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        if (date.getFullYear() !== now.getFullYear()) {
            return `${date.getFullYear()}.${month}.${day}`;
        } else {
            return `${month}.${day}`;
        }
    };

    return (
        <div className="questionListContent">
            <div className="questionListContentItems">{list.author}</div>
            <div className="questionListContentItems">{list.title}</div>
            <div className="questionListContentItems">{formatDate(list.auditingDto.createdAt)}</div>
            <div className={`questionListContentItems ${list.isSolved === 'TRUE' ? 'solved' : 'unsolved'}`}>{list.isSolved === 'TRUE' ? "해결" : "미해결"}</div>
        </div>
    );
}

export default PagingQuestion;
