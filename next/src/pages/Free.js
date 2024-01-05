import styles from './Free.module.css';
import { useState, useEffect } from "react";
import Paging from '../components/Paging';

import data from '../data'; 

function Free(){

    let [list] = useState(data);

    return(
        <div className={styles.free}>
            <div className={styles.textArea}>
                <div className={styles.freeTitle}>
                    자유 게시판
                </div>
                <div className={styles.freeContent}>
                    📢 친구, 선후배와 하고 싶은 말을 자유롭게!
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

            <div className={styles.totalFree}>TOTAL {list.length}</div>

            <div className={styles.freeListArea}>
                <div className={styles.listTitle}>
                    <div className={styles.listTitleItems}>작성자</div>
                    <div className={styles.listTitleItems}>제목</div>
                    <div className={styles.listTitleItems}>날짜</div>
                </div>
                 {/* 데이터 역순으로 보내주세용 */}
                {
                    list.map((a,i)=>{
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

export default Free;