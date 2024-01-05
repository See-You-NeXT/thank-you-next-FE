import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

import data from '../data'; 

function Paging(){
    let [list] = useState(data);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    const totalItemsCount = list.length;
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = list.slice(startIndex, endIndex);

    console.log("startIndex:", startIndex);
    console.log("endIndex:", endIndex);
    console.log("currentItems:", currentItems);
    console.log("Paging rendered");
    return(
        <>
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