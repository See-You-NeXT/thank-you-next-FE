import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Pagination from "react-js-pagination";
import "./Paging.css";
import { PiNotePencil } from "react-icons/pi";
import SearchBar from "./SearchBar";
import instance from "../api/Axios";

function Paging({ postType }) {
    const navigate = useNavigate();

    // 데이터 상태 관리
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1); // 페이지는 1부터 시작
    const itemsPerPage = 10;
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        fetchPosts();
    }, [postType, page, keyword]); // postType, page, keyword가 변경될 때마다 데이터 가져오기

    const fetchPosts = async () => {
        try {
            const response = await instance.get('/api/posts', {
                params: {
                    dType: postType,
                    page: page - 1, // 서버에서 페이지는 0부터 시작하므로 -1
                    size: itemsPerPage,
                    sort: 'string',
                    keyword: keyword // 검색어 추가
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
        fetchPosts(); // 검색어가 변경될 때 데이터를 다시 가져오기
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

            <div className="listArea">
                <div className="listTitle">
                    <div className="listTitleItems">작성자</div>
                    <div className="listTitleItems">제목</div>
                    <div className="listTitleItems">날짜</div>
                </div>
                {currentItems.map((item) => (
                    <ListContent key={item.id} list={item} />
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
        <div className="listContent">
            <div className="listContentItems">{list.author}</div>
            <div className="listContentItems">{list.title}</div>
            <div className="listContentItems">{formatDate(list.auditingDto.createdAt)}</div>
        </div>
    );
}

export default Paging;
