import styles from './Question.module.css';
import { useState, useEffect } from "react";
import Paging from '../components/Paging';
import Hashtag from '../components/Hashtag';

import data from '../data'; 

function Question(){
    let [list] = useState(data);

    return(
        <div className={styles.question}>
            <div className={styles.textArea}>
                <div className={styles.questionTitle}>
                    질문 게시판
                </div>
                <div className={styles.questionContent}>
                    📢 세미나, 학교 수업, 독학 모두 상관없이 자유롭게 질문해봐요!
                </div>
            </div>

            <Hashtag />

            <div className={styles.userFuncArea}>
                <div className={styles.searchBar}>
                    검색창
                </div>
                <div className={styles.writingBtn}>
                    글쓰기
                </div>
            </div>

            <div className={styles.totalQuestion}>TOTAL {list.length}</div>

            <Paging />
            
        </div>
    );
}

export default Question;