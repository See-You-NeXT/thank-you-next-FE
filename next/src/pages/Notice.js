import styles from './Notice.module.css';
import { useState, useEffect } from "react";
import Paging from '../components/Paging';

import data from '../data'; 

function Notice(){

    let [list] = useState(data);

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

            <div className={styles.totalNotice}>TOTAL {list.length}</div>

            <Paging />
            
        </div>
    );
}

export default Notice;