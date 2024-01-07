import { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { PiNotePencil } from "react-icons/pi";

import SearchBar from "./SearchBar";

import data from '../data'; 

function Paging(){
    //검색창
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (search) => {
        // 검색어에 따라 데이터 필터링
        const filteredResults = data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredResults);
        setPage(1);
    };

    //페이지네이션
    let [list] = useState(data);
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
                <div className="writingBtn">
                    <PiNotePencil size={35}/>
                </div>
            </div>
            
            <div className="questionListArea">
                <div className="listTitle">
                    <div className="listTitleItems">작성자</div>
                    <div className="listTitleItems">제목</div>
                    <div className="listTitleItems">날짜</div>
                </div>
                 {/* 데이터 역순으로 보내주세용 */}
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
        <div className="listContent">
            <div className="listContentItems">{props.list.name}</div>
            <div className="listContentItems">{props.list.title}</div>
            <div className="listContentItems">{props.list.date}</div>
        </div>
    )
}

export default Paging;