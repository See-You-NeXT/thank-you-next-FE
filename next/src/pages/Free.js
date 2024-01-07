import styles from './Free.module.css';
import { useState, useEffect } from "react";
import Paging from '../components/Paging';
import { PiNotePencil } from "react-icons/pi";

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
                <PiNotePencil size={35}/>
                </div>
            </div>

            <div className={styles.totalFree}>TOTAL {list.length}</div>

            <Paging />
            
        </div>
    );
}

export default Free;