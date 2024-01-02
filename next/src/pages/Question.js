import styles from './Question.module.css';
import { useState, useEffect } from "react";
import Paging from '../components/Paging';
import HashTag from '../components/Hashtag';

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

            <HashTag />

            <div className={styles.userFuncArea}>
                <div className={styles.searchBar}>
                    검색창
                </div>
                <div className={styles.writingBtn}>
                    글쓰기
                </div>
            </div>

            <div className={styles.totalQuestion}>TOTAL {list.length}</div>

            <div className={styles.questionListArea}>
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

            <Paging />
            
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

export default Question;