import styles from './Notice.module.css';

function Notice(){
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
                    <div>작성자</div>
                    <div>제목</div>
                    <div>날짜</div>
                </div>
            </div>
            
        </div>
    );
}

export default Notice;