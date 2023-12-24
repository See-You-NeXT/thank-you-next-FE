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
                    <div className={styles.listTitleItems}>작성자</div>
                    <div className={styles.listTitleItems}>제목</div>
                    <div className={styles.listTitleItems}>날짜</div>
                </div>
                <div className={styles.listContent}>
                    <div className={styles.listContentItems}>양승민</div>
                    <div className={styles.listContentItems}>안녕하세요줄바꿈테스트입니다안녕하세요줄바꿈테스트입니다안녕하세요줄바꿈테스트입니다</div>
                    <div className={styles.listContentItems}>XX.XX</div>
                </div>
                <div className={styles.listContent}>
                    <div className={styles.listContentItems}>양승민</div>
                    <div className={styles.listContentItems}>안녕하세요줄바꿈테스트입니다안녕하세요줄바꿈테스트입니다안녕하세요줄바꿈테스트입니다</div>
                    <div className={styles.listContentItems}>XX.XX</div>
                </div>
            </div>
            
        </div>
    );
}

export default Notice;