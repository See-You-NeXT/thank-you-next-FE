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

export default Paging;