import { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

import data from '../data'; 

function Paging(){
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
      };

    return(
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
}

export default Paging;