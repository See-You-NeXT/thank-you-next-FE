import styles from './Notice.module.css';
import { useState } from "react";
import Pagination from "react-js-pagination";

import data from '../data'; 

function Notice(props){

    let [list] = useState(data);
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
      };

    return(
        <div className={styles.notice}>
            <div className={styles.textArea}>
                <div className={styles.noticeTitle}>
                    공지 게시판
                </div>
                <div className={styles.noticeContent}>
                    📢 NeXT의 중요 공지사항은 다 이 곳에서!
                </div>
            </div>

            <div className={styles.userFuncArea}>
                <div className={styles.searchBar}>
                    검색창
                </div>
                <div className={styles.writingBtn}>
                    글쓰기
                </div>
            </div>

            <div className={styles.noticeListArea}>
                <div className={styles.listTitle}>
                    <div className={styles.listTitleItems}>작성자</div>
                    <div className={styles.listTitleItems}>제목</div>
                    <div className={styles.listTitleItems}>날짜</div>
                </div>
                 {/* 데이터 역순으로 보내주세용 */}
                {
                    list.reverse().map((a,i)=>{
                        return(
                            <ListContent list={list[i]}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

function ListContent(props){
    return(
        <div className={styles.listContent}>
            <div className={styles.listContentItems}>{props.list.name}</div>
            <div className={styles.listContentItems}>{props.list.title}</div>
            <div className={styles.listContentItems}>{props.list.date}</div>
        </div>
    )
}

export default Notice;